var app = getApp()
Page({
    data: {
        title: null,
        arr_res: {},
        message: null,
        isconcern: false,
        request_fail: false
    },
    onLoad: function (options) {
        console.log(options.id);
        console.log(options.name);
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
                cardid: '842587500642828288',
                openid: '111'
            },

            success: function (res) {
                console.log(res.data);
                that.setData({
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


    },
    html_encode: function (str) {
        if (str.length == 0) return "";
        str = str.replace(/<h2>/, '');
        str = str.replace(/<h2>/g, '\n\n\n');
        str = str.replace(/<p>/g, '\n');
        str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
        str = str.replace(/&nbsp;/g, '');

        str.value = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白

        return str;
    }
})
