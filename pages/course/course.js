//course.js
//获取应用实例
Page({
  data: {
    listData:[
      ["一二","线性代数 综合楼","人文科学 信科二阶","经济地理","人文物理 综合楼三教","高等数学 信科三阶"],
      ["三四","","","","",""],
      ["五六","","","","",""],
      ["七八","","","","","概率论"],
      ["九十","","","","",""],
      ["十一十二","","","","",""]
    ],//课程列表
    course_empty:true,
},
onShow: function(options){
  this.showCourse();
},

onLoad:function(){
  
},

showCourse:function(){
if(!wx.getStorageSync('isLogin')){
      wx.showModal({title: '加载失败', content: '请先登录！', showCancel: false, success: function(res) {
        wx.switchTab({
          url:'../../pages/index/index',
            success:function(){
              console.log("called switchtab.");
        }
      });
    }});
  }else{
    //已登录
    wx.showToast({title: '正在加载课表', icon: 'loading', duration: 10000});
    wx.hideToast();
    this.setData({
    course_empty:false,
    listData: this.listData
      });
      // wx.setStorageSync(course_cache, this.listData) //缓存课表
      console.log(this.listData);
    
  }
},
});



