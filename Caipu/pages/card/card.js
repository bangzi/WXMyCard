var common = require('../../utils/common.js').userInfo()
var app = getApp()

Page({
  data:{
    isEdit:true,
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
        typeid:'username',
        inputValue: ''
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
        typeid:'profession',
        inputValue: ''
      }, {
        text: '公司：',
        nowtype: false,
        placeholderLabel: '请输入公司',
        typeid:'company',
        inputValue: ''
      }, {
        text: '地址：',
        nowtype: false,
        placeholderLabel: '请输入地址',
        typeid:'address',
        inputValue: ''
      }, {
        text: 'QQ号：',
        nowtype: false,
        placeholderLabel: '请输入QQ号',
        typeid:'qqnumber',
        inputValue: ''
      }, {
        text: '微信号：',
        nowtype: false,
        placeholderLabel: '请输入微信号',
        typeid:'wechatnumber',
        inputValue: ''
      }, {
        text: '手机号：',
        nowtype: false,
        placeholderLabel: '请输入手机号',
        typeid:'phonenumber',
        inputValue: ''
      }, {
        text: '电话：',
        nowtype: false,
        placeholderLabel: '请输入手机号',
        typeid:'telephonenumber',
        inputValue: ''
      }, {
        text: '邮箱：',
        nowtype: false,
        placeholderLabel: '请输入邮箱',
        typeid:'mail',
        inputValue: ''
      }, {
        text: '传真：',
        nowtype: false,
        placeholderLabel: '请输入手机号',
        typeid:'faxnumber',
        inputValue: ''
      }, {
        text: '公司网址：',
        nowtype: false,
        placeholderLabel: '请输入公司网址',
        typeid:'website',
        inputValue: ''
      }]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this;
    var manCheck;
    var womanCheck;
    wx.getStorage({
      key: 'UserCardInfoStorage',
      success: function (res) {
        console.log('获取到缓存的用户信息', res.data);
        if (res.data == null) {
          return;
        };
        if(res.data.sex == "男"){
          manCheck = 'true';
          womanCheck = '';
        }else {
          manCheck = '';
          womanCheck = 'true';
        };
        //获取到缓存的用户信息之后，并跟新数据
        that.setData({
          isEdit:false,
          username: res.data.username,
          profession: res.data.profession,
          company: res.data.company,
          address: res.data.address,
          qqnumber: res.data.qqnumber,
          wechatnumber: res.data.wechatnumber,
          phonenumber: res.data.phonenumber,
          telephonenumber: res.data.telephonenumber,
          faxnumber: res.data.faxnumber,
          website: res.data.website,
          mail: res.data.mail,
          userListInfo: [{
            text: '姓名：',
            nowtype: false,
            placeholderLabel: '请输入姓名',
            typeid: 'username',
            inputValue: res.data.username
          }, {
            text: '性别：',
            placeholderLabel: '请输入性别',
            nowtype: true,
            items: [{ name: 'man', value: '男', checked:  manCheck},
            { name: 'woman', value: '女', checked: womanCheck },]
          }, {
            text: '职称：',
            nowtype: false,
            placeholderLabel: '请输入职称',
            typeid: 'profession',
            inputValue: res.data.profession
          }, {
            text: '公司：',
            nowtype: false,
            placeholderLabel: '请输入公司',
            typeid: 'company',
            inputValue: res.data.company
          }, {
            text: '地址：',
            nowtype: false,
            placeholderLabel: '请输入地址',
            typeid: 'address',
            inputValue: res.data.address
          }, {
            text: 'QQ号：',
            nowtype: false,
            placeholderLabel: '请输入QQ号',
            typeid: 'qqnumber',
            inputValue: res.data.qqnumber
          }, {
            text: '微信号：',
            nowtype: false,
            placeholderLabel: '请输入微信号',
            typeid: 'wechatnumber',
            inputValue: res.data.wechatnumber
          }, {
            text: '手机号：',
            nowtype: false,
            placeholderLabel: '请输入手机号',
            typeid: 'phonenumber',
            inputValue: res.data.phonenumber
          }, {
            text: '电话：',
            nowtype: false,
            placeholderLabel: '请输入手机号',
            typeid: 'telephonenumber',
            inputValue: ''
          }, {
            text: '邮箱：',
            nowtype: false,
            placeholderLabel: '请输入邮箱',
            typeid: 'mail',
            inputValue: res.data.mail
          }, {
            text: '传真：',
            nowtype: false,
            placeholderLabel: '请输入手机号',
            typeid: 'faxnumber',
            inputValue: ''
          }, {
            text: '公司网址：',
            nowtype: false,
            placeholderLabel: '请输入公司网址',
            typeid: 'website',
            inputValue: res.data.website
          }]
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },

  onShow:function(){
    // 生命周期函数--监听页面显示
 
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

/**
 * 保存名片信息，以及上传到服务端
 */
  saveEventHandle: function(e) {
     console.log('saveEventHandle发生change事件，携带value值为：', e.detail.value);
     //相关信息不全时，给出必要的提示
     if(this.data.username == ''){
       console.log('用户名为空');
       wx.showToast({
         title: '用户名不能为空',
         icon: 'loading',
       });
       return;
     }
     if(this.data.profession == ''){
       wx.showToast({
         title: '职称不能为空',
         icon: 'loading',
       });
       return;
     }
     if(this.data.company == ''){
       wx.showToast({
         title: '公司不能为空',
         icon: 'loading',
       });
       return;
     }
     if(this.data.qqnumber == '' && this.data.wechatnumber == '' && this.data.phonenumber == '' && this.data.mail == ''){
       wx.showToast({
         title: '联系方式必须填其中之一',
         icon: 'loading',
       });
       return;
     }
     //保存名片的信息
     wx.setStorage({
       key: "UserCardInfoStorage",
       data: {
         username: this.data.username,
         profession: this.data.profession,
         company: this.data.company,
         sex: this.data.sex,
         describe: this.data.describe,
         address: this.data.address,
         qqnumber: this.data.qqnumber,
         wechatnumber: this.data.wechatnumber,
         phonenumber: this.data.phonenumber,
         telephonenumber: this.data.telephonenumber,
         faxnumber: this.data.faxnumber,
         website: this.data.website,
         mail: this.data.mail,
       }
     })
     console.log('用户信息：'+ this.data.username + this.data.sex + this.data.profession + this.data.company + this.data.address);
     //必填的信息不为空时，上传名片信息
    var that = this;
    wx.showLoading({
        title: '保存中',
      }),
    wx.request({
      url: app.globalData.globalUrl + "card/update",
      data: {
        openid: common.openid,
        classifyid: common.sessionkey,
        icon: '图片',
        username: that.data.username,
        profession: that.data.profession,
        gender: that.data.sex,
        // describe: '写代码的程序员',
        company: that.data.company,
        address: that.data.address,
        qqnumber: that.data.qqnumber,
        wechatnumber: that.data.wechatnumber,
        phonenumber: that.data.phonenumber,
        telephonenumber: that.data.telephonenumber,
        faxnumber: that.data.faxnumber,
        website: that.data.website,
        mail: that.data.mail,
        // companylogo: '公司logo'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      header: {
      'content-type': 'application/json'
      },
      success: function(res){
        // success
        wx.hideLoading(),
        console.log('请求成功' + res.data.messcode)
      },
      fail: function(error) {
        // fail
        wx.hideLoading(),
        console.log('请求失败' + error)
      },
      complete: function() {
        // complete
        wx.hideLoading(),
        console.log('请求完成')
      }
    })
  },

/**
 * 输入框的触发的事件
 */
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
      }else if(e.target.id == 'telephonenumber') {
          this.setData({
            telephonenumber: e.detail.value
          })
      }else if(e.target.id == 'mail') {
          this.setData({
            mail: e.detail.value
          })
      }else if(e.target.id == 'faxnumber') {
          this.setData({
            faxnumber: e.detail.value
          })
      }else if(e.target.id == 'website') {
          this.setData({
            website: e.detail.value
          })
      };
      console.log('用户信息：'+ this.data.username + this.data.sex + this.data.profession + this.data.company + this.data.address);
  },

/**
 * 编辑事件
 */
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


