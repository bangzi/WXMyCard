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
    console.log("获取email" + emailinfo);
    console.log("获取描述" + describeinfo);
    //判断是否为邮箱的正则表达式
    var usableEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

    // console.log(usableEmail.test(emailinfo));
    if (usableEmail.test(emailinfo)) {
      wx.request({
        url: app.globalData.globalUrl + "insertfaq",
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        data: {
          "openid": common.openid,
          "email": emailinfo,
          "description": describeinfo
        },

        success: function (res) {

          console.log("当前网址反馈成功");
        },
        fail: function (error) {
          console.log(error);

        }
      })
    } else {
      wx.showToast({
        title: '请输入正确的邮箱地址',
        duration: 2000
      })
    }


  }
})