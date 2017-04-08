
var app = getApp()
var isconcern;
var common = require('../../utils/common.js').userInfo()
Page({
    data: {
        title: null,
        arr_res:{},
        resultdata: {},
        message: null,
        request_fail: false
    },
    onLoad: function (options) {
        console.log(options.item);
        // this.setData({
        //     title:options.name
        // })
        this.setData({
            arr_res:{
                address:options.address,
                company:options.company,
                faxnumber:options.faxnumber,
                icon:options.icon,
                isconcern:options.isconcern,
                mail:options.mail,
                phonenumber:options.phonenumber,
                profession:options.profession,
                qqnumber:options.qqnumber,
                telephonenumber:options.telephonenumber,
                username:options.username,
                website:options.website,
                wechatnumber:options.wechatnumber,
                companylogo:options.companylogo              
            }
        })
    },
         concernOther: function () {
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
                    openid: common.openid,
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
