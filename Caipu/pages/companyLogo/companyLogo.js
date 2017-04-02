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


  }

})