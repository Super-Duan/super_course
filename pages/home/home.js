// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  clickCourse:function(){
    var token=wx.getStorageSync('token');
       wx.request({
         url: 'http://supercourse.natapp1.cc/target/showTargets',
         method: 'GET',
          header:{
            "Content-Type": "application/json",
            'token': token
          },
          success:function(result){
            console.log(result);
            wx.setStorageSync('courseInfo', result.data);
            console.log(result.data);
            app.globalData.token = result.data.token;
            var course = wx.getStorageSync('courseInfo');
            console.log(course);
          }
       })
    wx.navigateTo({
      url: '/pages/course/course'
    })
  },
  clickClock:function(){
    wx.navigateTo({
      url: '/pages/time2/time2'
    })
  },
  clickHole:function(){
    wx.navigateTo({
      url: '/pages/dynamic/dynamic'
    })
  },
  clickMy:function(){
    wx.navigateTo({
      url: '/pages/My/My'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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