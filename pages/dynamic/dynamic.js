// pages/comment.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    show1: false,
    //
    isShow: false,//控制emoji表情是否显示
    isLoad: true,//解决初试加载时emoji动画执行一次
    content: "",//评论框的内容
    isLoading: true,//是否显示加载数据提示
    disabled: true,
    cfBg: false,
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [],//qq、微信原始表情
    alipayEmoji: [],//支付宝表情
    title: '',//页面标题
    //
    id:'',
    index: '',
    input: '',
    comment: '',
    pageList: [{
      id: 0,
      avatar: '../../images/avatar/1.jpg',
      name: '心之所向',
      school: '东北师范大学',
      content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
      C_title: '1',
      S_title: '2',
      images: [
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',

      ],
      comment: [],
      support:
      {
        avatars: [
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
        ],
        Usernames: [
          '心之所向',
          '心之所向',
          '心之所向',
          '心之所向',
        ],
        status: false
      }
    },
    {
      id: 1,
      avatar: '../../images/avatar/1.jpg',
      name: '心之',
      school: '东北师范大学',
      content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！！啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦！啊啦啦啦啦啦啦啦啦啦啦啦！',
      C_title: '1',
      S_title: '3',
      images: [
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',

      ], support:
      {
        avatars: [
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
        ],
        Usernames: [
          '心之所向',
          '心之所向',
          '心之所向',
          '心之所向',
        ],
        status: false
      }
    },
    {
      id: 2,
      avatar: '../../images/avatar/1.jpg',
      name: '心之所向',
      school: '东北师范大学',
      content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
      C_title: '1',
      S_title: '2',
      images: [
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',
        '../../images/avatar/1.jpg',


      ],
      comment: [],
      support:
      {
        avatars: [
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
        ],
        Usernames: [
          '心之所向',
          '心之所向',
          '心之所向',
          '心之所向',
        ],
        status: false
      }
    }
    ]




  },
  onClickShow(e) {
    // 当点击图片时，将该图片所在数组的下标传入
    const index = e.currentTarget.dataset.id;
    for (var i = 0; i < this.data.pageList.length; i++) {
      if (index === this.data.pageList[i].id) {
        this.data.index = i
      }
    }
    const id = this.data.index;
    //数据绑定
    this.setData({
      show: true,
      gallery: this.data.pageList[id].images
    });
  },
  //隐藏画廊
  onClickHide() {
    this.setData({
      show: false,
      show1: false
    });
  },
  noop() { },
  //点击信息图标跳转到评论详情页面
  commentDetail: function (e) {
    const commentId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../DynamicDetails/DynamicDetails?id=" + commentId
    })
  },

  //点击动态页面的发评论输入框时
  click: function (e) {
    //获取当前评论动态的id编号
    this.data.id = e.currentTarget.dataset.id;
    this.setData({
      show1: true
    })
  },
  inputFocus(e) {
    var inputHeight = 0
    //获取键盘的高度
    if (e.detail.height) {
      inputHeight = e.detail.height
    }
    //获取当前评论动态的id编号
    this.data.id = e.currentTarget.dataset.id;
    //数据绑定
    this.setData({
      inputHeight: inputHeight,
      placeholder: ''
    })
  },
  //文本框输入内容的话将其传入comment数据中
  comment: function (e) {
    this.data.comment = e.detail.value;


  },
  //点击发送时将文本框的数据传入,为了辨别是谁发的评论，在哪条动态下的评论，还得传入用户id和动态id。
  send: function (e) {
    const name = getApp().globalData.userInfo.nickName;
    const comment = this.data.comment;
    const commentId=this.data.id;
    //有问题，应该获取的是登陆的学号
    const userId=getApp().globalData.userInfo.nickName;
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
       name:name,
       comment:comment,
        commentId:commentId,
        userId:userId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
    this.setData({
      show1: false,
      comment:''
    })
  },
  //点赞这一块逻辑有问题
  support: function (e) {
    //获取当前数据id编号
    const userId = e.currentTarget.dataset.id;
    //获取点赞当前用户信息
    const name = getApp().globalData.userInfo.nickName;
    const avatar = getApp().globalData.userInfo.avatarUrl;
    //判断是否点赞
    this.data.pageList[userId].support.status = !this.data.pageList[userId].support.status
    if (this.data.pageList[userId].support.status) {
      this.data.pageList[userId].S_title++;
      //获取当前用户信息
      const name = getApp().globalData.userInfo.nickName;
      const avatar = getApp().globalData.userInfo.avatarUrl;
      //将用户信息传入数组中
      this.data.pageList[userId].support.avatars.push(avatar)
      this.data.pageList[userId].support.Usernames.push(name)
    }
    else {
      this.data.pageList[userId].S_title--
      const length = this.data.pageList[userId].support.avatars.length;
      //删除当前点赞的用户信息
      this.data.pageList[userId].support.avatars.splice(length - 1, 1)
      this.data.pageList[userId].support.Usernames.splice(length - 1, 1)
    }
    this.setData({
      pageList: this.data.pageList,
    })
  },
  //转到发动态页面
  post: function () {
    console.log(1);
    wx.navigateTo({
      url: "../HairDynamics/HairDynamics"
    })
  },

  // 数据绑定
  onLoad: function (options) {
    var em = {};
    var that = this;
    var emChar = that.data.emojiChar.split("-");
    var emojis = []
    that.data.emoji.forEach(function (v, i) {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    })
    this.setData({
      pageList: this.data.pageList,
      emojis: emojis,
      isShow:that.data.isShow,
      isLoad:that.data.isLoad
    });
  },
//点击表情显示隐藏表情盒子
emojiShowHide: function () {
  this.setData({
    isShow: !this.data.isShow,
    isLoad: false,
    cfBg: !this.data.false
  })
},
//表情选择
emojiChoose: function (e) {
  //当前输入内容和表情合并
  this.setData({
    comment: this.data.comment + e.currentTarget.dataset.emoji
  })
},
//点击emoji背景遮罩隐藏emoji盒子
cemojiCfBg: function () {
  this.setData({
    isShow: false,
    cfBg: false
  })}
})