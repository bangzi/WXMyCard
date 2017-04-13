
var app = getApp()
var common = require('../../utils/common.js').userInfo()
Page({
    data: {
        arr_res: {},
        request_fail: false,
        isconcern:0,
        logoImageUrl: app.globalData.globalImageUrl,
    },
    onLoad: function (options) {
        // this.setData({
        //     title:options.name
        // })
        console.log(options.isconcern);
        console.log(options);
        this.setData({
            arr_res: {
                address: options.address,
                company: options.company,
                faxnumber: options.faxnumber,
                icon: options.icon,
                mail: options.mail,
                phonenumber: options.phonenumber,
                profession: options.profession,
                qqnumber: options.qqnumber,
                telephonenumber: options.telephonenumber,
                username: options.username,
                website: options.website,
                wechatnumber: options.wechatnumber,
                companylogo: options.companylogo,
                cardid:options.cardid
            },
             isconcern:parseInt(options.isconcern)
        })
    },
    concernOther: function () {
        var that = this;
        var nowurl;//数据的初始化
        console.log(that.data.arr_res);
        console.log(that.data.isconcern);
        console.log(that.data.arr_res.cardid);
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
                cardid: that.data.arr_res.cardid,
                openid: common.openid,
            },

            success: function (res) {
                console.log(nowurl);
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
