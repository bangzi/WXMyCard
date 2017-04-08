var app = getApp()
var common = require('../../utils/common.js').userInfo()
Page({
  data: {
    
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
  },
  bindFormSubmit: function (e) {
    var that = this;
    var emailinfo = e.detail.value.mail;
    var describeinfo = e.detail.value.describe;
    console.log("获取email"+emailinfo);
    console.log("获取描述"+describeinfo);

    wx.request({
      url: app.globalData.globalUrl + "insertfaq",
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        "openid": common.openid,
        "email": emailinfo,
        "description": escribeinfo
      },

      success: function (res) {

        console.log("当前网址反馈成功");
      },
      fail: function (error) {
        console.log(error);

      }
    })

  }
})