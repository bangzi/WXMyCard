//list.js
var app = getApp()
Page({
    data: {
        arr_res: [],
        url: "../../pages/otherCard/otherCard",
        logoImageUrl: app.globalData.globalImageUrl
    },
    onLoad: function (options) {
        // if (app.globalData.result == {}) {
        //     wx.showToast({
        //         title: '无匹配信息',
        //         duration: 2000
        //     })
        // } else {
        //     this.setData({
        //         arr_res: app.globalData.result.cardlist,
        //     })
        //     console.log(this.data.arr_res);
        // }

    },
    onShow: function () {
        
        if (app.globalData.result.cardlist.length ==0) {
            console.log("fhajfhajkhfakj");
            wx.showToast({
                title: '无匹配信息',
                duration: 2000
            })
        } else {
            this.setData({
                arr_res: app.globalData.result.cardlist,
            })
            console.log(this.data.arr_res);
        }

    }
    // //点击事件监听
    // tapItem: function(event) {
    //     app.globalData.contentId = event.target.id;
    //     console.log(app.globalData.contentId);
    //     for (var i = 0; i < this.data.arr_res.length; i++) {
    //         if (this.data.arr_res[i].id == event.target.id) {
    //             app.globalData.contentName = this.data.arr_res[i].name;
    //             break;
    //         }
    //     }
    //     console.log(app.globalData.contentName);
    //     wx.navigateTo({
    //         url: "../../pages/content/content"
    //     });
    // }
})
