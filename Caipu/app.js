//app.js
App({
    //生命周期函数--监听小程序初始化
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch: function() {
        // //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        wx.login({
          success: function(res){
            if(res.code){
              console.log('获取用户登录态成功！' + res.errMsg + res.code)
            }else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    getUserInfo:function(cb){
      var that = this
      if(this.globalData.userInfo){
        typeof cb == "function" && cb(this.globalData.userInfo)
      }else{
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },
    globalData: {
        // userInfo:null
        globalUrl: "http://www.tngou.net/api/cook/",
        listName: null,
        listId: null,
        contentName:null,
        contentId: null,
        result:[]

    }
})