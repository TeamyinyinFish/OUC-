
Page({
  app = getApp(),
  data:({
    num:"",
    psw:"",
  }),
  number: function(e){
    this.setData({
      num:e.detail.value,
    })
  },
  password: function (e) {
    this.setData({
      psw: e.detail.value,
    })
  },
  bind:function(){
    wx.request({
      url: 'http://127.0.0.1:5000/servlet/setStuInfo?' +
           'openid=' + app.globalData.openid + 
           '&stuid=' + this.data.num + 
           '&stupwd=' +this.data.psw,
    })
  }
})