var app = getApp()
Page({
  data:{
    title:"成功进入界面",
     windowHeight: "500px",
    userListInfo: [{
        text: '描述：',
        nowtype:true,
        placeholderLabel: '请输入具体信息，以供核实和改进'
      },{
        text: '联系方式：',
        nowtype:false,
        placeholderLabel: '请输入邮箱' 
      }]
  },
   onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
})