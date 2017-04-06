
var app = getApp()
var common = require('../../utils/common.js').userInfo()
Page({
    data: {
        title: null,
        arr_res: {},
        resultdata: {},
        message: null,
        isconcern: false,
        request_fail: false
    },
    onLoad: function (options) {
        console.log("获取到cardid" + options.cardid);
        console.log("获取到openid" + options.openid);
        // this.setData({
        //     title:options.name
        // })
        var that = this;
        // 动态设置标题栏。。。无效
        // wx.setNavigationBarTitle({
        //     title: options.name,
        //     fail: function() {
        //         console.log("更改标题失败");
        //     },
        //     success: function() {
        //         console.log("更改标题成功");
        //     }
        // });

        //get请求
        wx.request({
            url: app.globalData.globalUrl + "card/detail",
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            data: {
                cardid: options.cardid,
                openid: common.openid
            },

            success: function (res) {
                console.log(res.data);
                console.log("获取到cardid" + options.cardid);
                console.log("获取到openid" + common.openid);
                that.setData({
                    resultdata: res.data,
                    arr_res: res.data.cardDetail
                })
                //  console.log('dedaoshu'+ that.data.arr_res);

            },
            fail: function (error) {
                console.log(error);
                that.setData({
                    request_fail: true
                })
            }
        })
    },
    concernOther: function (e) {
        var that = this;
        var nowurl;//数据的初始化
        console.log(nowurl);
        if (that.data.isconcern) {
            nowurl = app.globalData.globalUrl + "deletefollow"//赋值符号
        } else if (!that.data.isconcern) {
            nowurl = app.globalData.globalUrl + "insertfollow"

        }

        wx.request({

            url: nowurl,
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            data: {
                cardid: that.data.resultdata.cardid,
                openid: '111',
            },

            success: function (res) {
                console.log("标记" + that.data.isconcern);
                console.log("当前网址" + nowurl);
                console.log(res.data);
                that.setData({
                    isconcern: !that.data.isconcern
                })
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
