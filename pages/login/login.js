// pages/Setting/Setting.js
const app = getApp()
// const {request} ='../../utils/request.js'
var agreeUserAgreement = false
Page({
  data: {
   
  },
 
 onGotUserInfo(e) {
   wx.showLoading({
     title: '加载中...',
   })
   let that = this
   console.log("DDD");
  
  //  console.log(e.detail.errMsg);
  //  console.log(e.detail.userInfo.nickName,e.detail.userInfo.gender,e.detail.userInfo.avatarUrl);
  //  console.log(e.detail.rawData);
   // 登录
   wx.login({
     success: function (res) {
       console.log(res);
       // 获取登录的临时凭证
       var code = res.code;
       // 调用后端获取session_key,secret
      
       wx.request({
         url: 'http://supercourse.natapp1.cc/user/login',
         method: 'POST',
         data: {
           code: code,
           userName: e.detail.userInfo.nickName,
           headPic: e.detail.userInfo.avatarUrl
         },
         header: {
          "Content-Type": "application/x-www-form-urlencoded"
         },
         success: function (result) {
           wx.hideLoading();
           // 保存openid
           console.log(result);
           wx.setStorageSync('token', result.data.token);
           wx.setStorageSync('userInfo', result.data.userInfo);
           app.globalData.token = result.data.token;
           app.globalData.userInfo=result.data.userInfo;
           if(result.data.status===2){
            wx.setStorageSync('studentInfo', result.data.studentInfo);
            wx.navigateTo({
              url: '/pages/home/home',
            })
           }
           if(result.data.status===1){
            wx.navigateTo({
              url: '/pages/register/register'
              
            })    
           }
             else{
              wx.navigateTo({
                url: '/pages/home/home'
                
              })    
             } 
         }, fail(e) {
           console.log(e);

         }
       })
      // var token=wx.getStorageSync('token');
      //  wx.request({
      //    url: 'http://supercourse.natapp1.cc/target/showTargets',
      //    method: 'GET',
      //     header:{
      //       "Content-Type": "application/json",
      //       'token': token
      //     },
      //     success:function(result){
      //       console.log(result);
      //     }
      //  })
     }
   })

 },
 
})