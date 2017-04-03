var userInfo = function () {
  try{
    var value = wx.getStorageSync('TheUserUniqueIdentifierInfo');
    if(value) {
      console.log('获取到用户唯一id成功', value);
      return value;
    }
  }catch(e) {
     console.log('获取到用户唯一id失败', e);
  }
  return 'false';
}

module.exports = {
  userInfo : userInfo
}