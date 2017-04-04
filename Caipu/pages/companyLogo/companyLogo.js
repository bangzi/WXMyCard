var common = require('../../utils/common.js').userInfo()
var app = getApp()
var tempFilePaths;

Page({
  data:{
    srcLogoUrl:"",
    isExist:false,
  },

  onLoad: function(options) {
    var that = this;
    wx.getSavedFileList({
      success: function (res) {
        if (res.fileList.length > 0) {
          console.log(res.fileList[0].filePath)
          that.setData ({
            srcLogoUrl:res.fileList[0].filePath,
            isExist:true
          })
        }
      }
    })
  },

  addCompanyLogo:function(e) {
      var that = this;

      wx.chooseImage({
        count: 9, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function(res){
          tempFilePaths = res.tempFilePaths;
          console.log('获得的图片的路径：' + tempFilePaths);
          that.setData ({
             srcLogoUrl: tempFilePaths[0]
          })
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        },
      })
  },

  uploadCompanyLogo:function(e) {
    wx.saveFile({
      tempFilePath: tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath;
        console.log('图片的路径：' + savedFilePath)
      }
    });
    
    wx.uploadFile({
      url: app.globalData.globalUrl + '/extra/uploadlogo',
      filePath:tempFilePaths[0],
      name:'logoImage',
      // header: {}, // 设置请求的 header
      formData: {    // HTTP 请求中其他额外的 form data
         'openid' : common.openid
      }, 
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },

  onShareAppMessage: function () {
    return {
      title: '我的logo',
      path: '/pages/companyLogo',
      success: function(res) {
        // 分享成功
        console.log('分享成功', res);
      },
      fail: function(res) {
        // 分享失败
        console.log('分享失败', res);
      }
    }
  }

})