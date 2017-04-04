var app = getApp()
var common = require('../../utils/common.js').userInfo()
Page({
    data: {
        arr_res: [],

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载

        wx.request({
            url: app.globalData.globalUrl + "listFollow",
            data: {
                pagenum: '1',
                pagesize: '1',
                openid: common.openid
            },
           method: 'POST',
            success: function (res) {
                that.setData({
                    arr_res: res.data,
                });
                console.log(that.data.arr_res);
            },
            fail: function (error) {
                console.log(error);
                that.setData({
                    request_fail: true
                })
            }
        })
    }

})