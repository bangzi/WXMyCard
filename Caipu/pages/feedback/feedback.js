var app = getApp()
var common = require('../../utils/common.js').userInfo()
Page({
  data: {
    title: "成功进入界面",
    windowHeight: "500px",
    userListInfo: [{
      text: '描述：',
      nowtype: true,
      placeholderLabel: '请输入具体信息，以供核实和改进'
    }, {
      text: '联系方式：',
      nowtype: false,
      placeholderLabel: '请输入邮箱'
    }]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
  },
  bindFormSubmit: function (e) {
    var that = this;
    wx.request({
      url: app.globalData.globalUrl + "insertfaq",
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        "openid": common.openid,
        "email": e.detail.value.mail,
        "description": e.detail.value.describe
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