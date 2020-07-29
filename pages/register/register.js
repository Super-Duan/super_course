// pages/Setting/Setting.js
const app = getApp()


Page({
  data: {
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    value1:2,
  id:'',//学号
  code:'',//密码
   name:"",//姓名
   grade:'',//年级
   gender:'',//性别
   school:''//学校

  },
  inputId(e){
    let id = parseInt(e.detail.value);
    console.log(id)
    this.setData({
      id:id
    })
    console.log(this.data.id)
  
  },
  inputPassword(e){
    let password=e.detail.value;
    this.setData({
      code:password
    })
    console.log(e.detail.value);
  },
  inputName(e){
    let name=e.detail.value;
    this.setData({
      name:name
    })
    console.log(e.detail.value);
  },
  inputGrade(e){
    let grade=e.detail.value;
    this.setData({
      grade:grade
    })
    console.log(e.detail.value);
  },
  inputGender(e){
    this.setData({
      gender:e.detail.value
    })
    console.log(e.detail.value);
  },
  inputSchool(e){
    this.setData({
      school:e.detail.value
    })
    console.log(e.detail.value);
  },
  //登录请求
  login(){
    console.log('登录')
    var that=this;
  
    var token=wx.getStorageSync('token');
    console.log(token)
    wx.request({
      url: `${app.globalData.baseUrl}/user/register`,
      method:'POST',
      data:{
        id:that.data.id,
        code:that.data.code,
        name:that.data.name,
        grade:that.data.grade,
        gender:that.data.gender,
        school:that.data.school
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
  onReady() {
    
  },
  onLoad: function (options) {
 
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShow: function (options) {
   
  }
})