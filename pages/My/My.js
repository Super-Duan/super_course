// pages/Grade/Grade.js
// const API = require("../../utils/API.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menuitems: [
      { text: '完善信息', url: '../userinfo/userinfo', icon: '../../images/My-active.png', tips: '' },
      { text: '个性设置', url: '../userinfo/userinfo', icon: '../../images/More-active.png', tips: '' }
    ],
    interval: undefined,
    mainServer: "待检测",
    mainServerColor: "#6b6d75",
    proxyServer: "待检测",
    proxyServerColor: "#6b6d75",
    load: 0,
    loadColor: "#5099B9",
    isQQ: false
  },
  getInfo: function() {
    wx.getUserInfo({})
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  },
  onLoad: function() {
    this.setData({
      isQQ: !(typeof(qq) === 'undefined')
    })
  }
})