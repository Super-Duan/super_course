// pages/Grade/Grade.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  getInfo: function() {
    wx.getUserInfo({})
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  },
  onLoad: function() {
   
  }
})