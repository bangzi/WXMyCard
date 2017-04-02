var app = getApp()

Page({
  data:{
    isEdit:false,
    windowHeight: "700px",
    username:"",
    profession:"",
    company:"",
    sex:"男",
    describe:"",
    address:"",
    qqnumber:"",
    wechatnumber:"",
    phonenumber:"",
    telephonenumber:"",
    faxnumber:"",
    website:"",
    mail:"",
    userListInfo: [ {
        text: '姓名：',
        nowtype: false,
        placeholderLabel: '请输入姓名',
        typeid:'username'
      }, {
        text: '性别：',
        placeholderLabel: '请输入性别',
        nowtype: true,
        items:[{name: 'man', value: '男', checked: 'true'},
              {name: 'woman', value: '女', checked: ''},]
      }, {
        text: '职称：',
        nowtype: false,       
        placeholderLabel: '请输入职称',
        typeid:'profession'
      }, {
        text: '公司：',
        nowtype: false,
        placeholderLabel: '请输入公司',
        typeid:'company'
      }, {
        text: '地址：',
        nowtype: false,
        placeholderLabel: '请输入地址',
        typeid:'address'
      }, {
        text: 'QQ号：',
        nowtype: false,
        placeholderLabel: '请输入QQ号',
        typeid:'qqnumber'
      }, {
        text: '微信号：',
        nowtype: false,
        placeholderLabel: '请输入微信号',
        typeid:'wechatnumber'
      }, {
        text: '手机号：',
        nowtype: false,
        placeholderLabel: '请输入手机号',
        typeid:'phonenumber'
      }, {
        text: '邮箱：',
        nowtype: false,
        placeholderLabel: '请输入邮箱',
        typeid:'mail'
      }, {
        text: '公司网址：',
        nowtype: false,
        placeholderLabel: '请输入公司网址',
        typeid:'website'
      }]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  radioChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    if(e.detail.value == 'man'){
      this.setData ({
        sex:'男'
      })
    }else {
      this.setData ({
        sex:'女'
      })
    }
  },

  saveEventHandle: function(e) {
     console.log('saveEventHandle发生change事件，携带value值为：', e.detail.value);
     console.log('用户信息：'+ this.data.username + this.data.sex + this.data.profession + this.data.company + this.data.address);
    var that = this;
    wx.request({
      url: 'http://viakiba.cn/wxcard/card/insert',
      data: {
        openid: '111',
        classifyid: '1',
        icon: '图片',
        username: that.data.username,
        profession: that.data.profession,
        isconcern: 'ture',
        describe: '写代码的程序员',
        company: that.data.company,
        address: that.data.address,
        qqnumber: that.data.qqnumber,
        wechatnumber: that.data.wechatnumber,
        phonenumber: that.data.phonenumber,
        telephonenumber: that.data.telephonenumber,
        faxnumber: that.data.faxnumber,
        website: that.data.website,
        mail: that.data.mail,
        companylogo: '公司logo'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      header: {
      'content-type': 'application/json'
      },
      success: function(res){
        // success
        console.log('请求成功' + res.data.messcode)
      },
      fail: function(error) {
        // fail
        console.log('请求失败' + error)
      },
      complete: function() {
        // complete
        console.log('请求完成')
      }
    })
  },

  inputEventHandle:function(e) {
      console.log('inputEventHandle发生change事件，携带value值为：' + e.detail.value + e.target.id);
      if(e.target.id == 'username') {
          this.setData({
            username: e.detail.value
          })
      }else if(e.target.id == 'profession') {
          this.setData({
            profession: e.detail.value
          })
      }else if(e.target.id == 'company') {
          this.setData({
            company: e.detail.value
          })
      }else if(e.target.id == 'address') {
          this.setData({
            address: e.detail.value
          })
      }else if(e.target.id == 'qqnumber') {
          this.setData({
            qqnumber: e.detail.value
          })
      }else if(e.target.id == 'wechatnumber') {
          this.setData({
            wechatnumber: e.detail.value
          })
      }else if(e.target.id == 'phonenumber') {
          this.setData({
            phonenumber: e.detail.value
          })
      }else if(e.target.id == 'mail') {
          this.setData({
            mail: e.detail.value
          })
      }else if(e.target.id == 'website') {
          this.setData({
            website: e.detail.value
          })
      };
      console.log('用户信息：'+ this.data.username + this.data.sex + this.data.profession + this.data.company + this.data.address);
  },

  editEventHandle:function(e) {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id == '1') {//id为1时，为编辑按钮
      this.setData({
        isEdit: true
      })
    }else{
      this.setData({
        isEdit: false
      })
    }  
  }

})
