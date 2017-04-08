var app = getApp()
var common = require('../../utils/common.js').userInfo()
Page({
    data: {
        url:"../../pages/otherCard/otherCard",
        arr_res: [],
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
 
    },
    onShow: function (options){
       var that=this;
        wx.request({
            url: app.globalData.globalUrl + "listfollow",
           
            data: {
                pagenum: '0',
                pagesize: '10',
                openid: common.openid
            },
             header: {
                "content-type": 'application/x-www-form-urlencoded'
            },
           method: 'POST',
            success: function (res) {
                that.setData({
                    arr_res: res.data.cardlist
                });
                 console.log( app.globalData.globalUrl + "listfollow");
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