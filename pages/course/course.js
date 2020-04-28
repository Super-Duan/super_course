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
    hiddenmodalput:true,
    userplan:"",
    rowPlan:-1,
    colPlan:-1,
    inputValue:null
},

onShow: function(options){
  this.showCourse();
},

//点击表格中view，弹出输入弹框
modalinput:function(e){
  this.setData({
     hiddenmodalput: !this.data.hiddenmodalput
  })
  var that = this;
  var i = e.currentTarget.dataset.row;
  var j = e.currentTarget.dataset.col;
  this.setData({
    rowPlan: i,
    colPlan: j
  })
  console.log(this.data.listData)
},

//获取plan的input值
getUserplan: function(e){
  // console.log(e)
  this.setData({
    userplan: e.detail.value
  })
},

//取消按钮
cancel: function(){
      this.setData({
          hiddenmodalput: true,
          inputValue:"",
          userplan: ""
      });
  },

//确认按钮
confirm: function(e){
  var i = this.data.rowPlan
  var j = this.data.colPlan
  var a = "listData["+i+"]["+j+"]";
  this.setData({
    hiddenmodalput: true,
    [a]: this.data.userplan,
    inputValue: "",
    userplan:""
})
console.log(this.data.listData)
},

onLoad:function(){
  console.log(this.data.listData)
  
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
    console.log(this.data.listData)
    
      // wx.setStorageSync(course_cache, this.listData) //缓存课表
      // console.log(this.listData);
    
  }
},

});



