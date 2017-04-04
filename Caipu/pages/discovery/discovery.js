//list.js
var app = getApp()
var number = 1
var isLoading = false
Page({
    data: {
        arr_res: [],
        windowHeight: "800px",
        loadingHidden: true,
        lodingInfo: "加载更多",
        url: "../../pages/otherCard/otherCard",
        input_value: null,
        loadingHidden: true,
        nullHidden: true,
        lodingInfo: "正在搜索",
        isConcern: false,
    },
    onLoad: function (options) {
        //使number重置为1
        number = 1;
        console.log(app.globalData.listId);
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                var height = res.windowHeight - 0;
                console.log(height + "px");
                that.setData({
                    windowHeight: height + "px"
                })
            },
            fail: function (e) {
                console.log("获取设备信息失败" + e);
            }
        });

        wx.request({
            url: app.globalData.globalUrl + "listUser",//"https://viakiba.cn/wxcard/card/list",
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            data: {
                classifyid: '1',
                openid: '111',
                pagenum: '0',
                pagesize: '3',
            },
            success: function (res) {
                console.log("获取设备信息失败" + res.data);
                that.setData({
                    arr_res: res.data.cardlist,
                });
                console.log(that.data.arr_res);
            },
            fail: function (error) {
                console.log(error);
                that.setData({
                    request_fail: true,
                });
            }
        })
    },
    //滑到底部监听事件
    lower: function (e) {
        console.log(e);
        var that = this;
        if (!isLoading) {
            isLoading = true;
            that.setData({
                loadingHidden: false
            })
            wx.request({
                url: app.globalData.globalUrl + "list",
                data: {
                    page: ++number
                },
                success: function (res) {
                    that.setData({
                        arr_res: that.data.arr_res.concat(res.data.tngou),
                        lodingInfo: "加载更多",
                    });
                    console.log(that.data.arr_res);
                },
                fail: function (error) {
                    number--;
                    console.log(error);
                    that.setData({
                        lodingInfo: "加载失败",
                    })
                },
                complete: function () {
                    isLoading = false;
                    that.setData({
                        loadingHidden: true,
                    })
                }
            })
        }
    },

    //搜索内容
    bindSearchInput: function (e) {
        this.setData({
            input_value: e.detail.value
        })
    },
    tapSearch: function (event) {
        wx.hideKeyboard();
        if (this.data.input_value == null || this.data.input_value.length == 0) {
            return;
        }
        var that = this;
        this.setData({
            loadingHidden: false,
            nullHidden: true,
            lodingInfo: "正在搜索"
        })
        wx.request({
            url: app.globalData.globalUrl + "name",
            data: {
                name: that.data.input_value,
            },
            success: function (res) {
                if (res.data.tngou.length == 0) {
                    that.setData({
                        nullHidden: false,
                    })
                } else {
                    console.log(res.data.tngou);
                    app.globalData.result = res.data.tngou
                    wx.navigateTo({
                        url: "../../pages/result/result"
                    });
                }
            },
            fail: function (error) {
                console.log(error);
                that.setData({
                    lodingInfo: "搜索失败，请检查您的网络",
                    request_fail: true,
                });
            },
            complete: function () {
                that.setData({
                    loadingHidden: true
                })
            }
        })
    },
    onHide: function () {
        this.setData({
            loadingHidden: true
        })
    },

    concernEventHandle: function (e) {
        console.log('switch的值改变', this.data.isConcern),
            this.setData({
                isConcern: !this.data.isConcern,
            })
    },
})
