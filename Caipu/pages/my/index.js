var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    windowHeight: "800px",
    userListInfo: [ {
      icon: '../../images/iconfont-dingdan.png',
      text: '我的名片',
      url:"../../pages/card/card",
      isunread: false,
      unreadNum: 0,
      isOpen: false
    },{
      icon: '../../images/iconfont-dingdan.png',
      text: '添加logo',
      url:"../../pages/companyLogo/companyLogo",
      isOpen: false
    }, {
        icon: '../../images/iconfont-card.png',
        text: '我的关注',
        isunread: false,
        unreadNum: 0,
        isOpen: false
      }
      // , {
      //   icon: '../../images/iconfont-help.png',
      //   text: '是否公开',
      //   isOpen: true
      // }
      , {
        icon: '../../images/iconfont-kefu.png',
        text: '反馈',
        url:"../../pages/feedback/feedback",
        isOpen: false
      }]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },

  switchEventHandle: function(e) {
    console.log('switch的值改变', e.detail.value)
  }
})