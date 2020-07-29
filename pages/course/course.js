//course.js
//获取应用实例
Page({
  data: {
    listData:[
      ["一二","","","","",""],
      ["三四","","","","",""],
      ["五六","","","","",""],
      ["七八","","","","",""],
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
  console.log(this.data.listData);
  console.log(this.data.listData[0][0]);
  
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
    var course = wx.getStorageSync('courseInfo');
    // var length = course.length;
    for(let k in course){
      console.log(Math.floor(course[k].time/10));
      console.log(course[k].time%10);
      var weekday = Math.floor(course[k].time/10);
      var courseNum = course[k].time%10;
      var listData = this.data.listData;
      listData[courseNum-1][weekday] = course[k].targetName + "   " + course[k].position;
      console.log(this.data.listData);
      // this.setData({
      //   listData: this.listData
      // })
      // this.data.listData[]
    }
    this.setData({
    course_empty:false,
    listData: this.data.listData
      });
    console.log(this.data.listData);

    
      // wx.setStorageSync(course_cache, this.listData) //缓存课表
      // console.log(this.listData);
    
  }
},

});



