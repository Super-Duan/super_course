// pages/modifyInfo/modifyInfo.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    nickname:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const studentInfo=wx.getStorageSync('studentInfo');
    const userInfo=wx.getStorageSync('userInfo');
    this.setData({
      name:studentInfo.name,
      nickname:userInfo.nickname
    })
  },
inputName(e){
  this.setData({
    name:e.detail.value
  })
  console.log(this.data.name)
},
inputNickname(e){
  this.setData({
    nickname:e.detail.value
  })
  console.log(this.data.nickname)
},
modify(){
  var that=this;
  var token=wx.getStorageSync('token');
  wx.request({
    url: `${app.globalData.baseUrl}/user/nodify`,
    method:'GET',
    data:{
      name:that.data.name,
      nickname:that.data.nickname
    },
    header:{
      "Content-Type": "application/x-www-form-urlencoded",
      'token': token
    },
    // header['token'] = app.globalData.token,
    success (res) {
      console.log(res.data)
    },
    fail(e){
      console.log(e)
    }
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})