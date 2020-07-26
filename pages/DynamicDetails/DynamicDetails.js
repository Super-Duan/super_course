// pages/DynamicDetails/DynamicDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    show1: true,
    index: '',
    input: '',
    comment: '',
    currentPostId: '',
    //
    isShow: false, //控制emoji表情是否显示
    isLoad: true, //解决初试加载时emoji动画执行一次
    content: "", //评论框的内容
    isLoading: true, //是否显示加载数据提示
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
    emojis: [], //qq、微信原始表情
    alipayEmoji: [], //支付宝表情
    title: '', //页面标题
    //
    pageList: [{
        id: 0,
        avatar: '../../images/avatar/1.jpg',
        name: '心之所向',
        school: '东北师范大学',
        content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
        //点赞人的头像和姓名
        support: {
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
          ]
        },
        comments: [{
          avatar: '../../images/avatar/1.jpg',
          name: '心之所向',
          time: "04/27 14：50",
          school: '东北师范大学',
          content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
        }, {
          avatar: '../../images/avatar/1.jpg',
          name: '心之所向',
          time: "04/27 14：50",
          school: '东北师范大学',
          content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
        }, {
          avatar: '../../images/avatar/1.jpg',
          name: '心之所向',
          time: "04/27 14：50",
          school: '东北师范大学',
          content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
        }, {
          avatar: '../../images/avatar/1.jpg',
          name: '心之所向',
          time: "04/27 14：50",
          school: '东北师范大学',
          content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
        }],
        C_title: '1',
        S_title: '2',
        images: [
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',

        ],
        comment: [],
      },
      {
        id: 1,
        avatar: '../../images/avatar/1.jpg',
        name: '心之',
        school: '东北师范大学',
        content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！！啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦！啊啦啦啦啦啦啦啦啦啦啦啦！',
        //点赞人的头像和姓名
        support: [{
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
          ]
        }],
        C_title: '1',
        S_title: '3',
        images: [
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',

        ]
      },
      {
        id: 2,
        avatar: '../../images/avatar/1.jpg',
        name: '心之所向',
        school: '东北师范大学',
        content: '我是一个粉刷匠，粉刷本领强，我要把我的小房子，刷的更漂亮！',
        //点赞人的头像和姓名
        support: [{
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
          ]
        }],
        C_title: '1',
        S_title: '2',
        images: [
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',
          '../../images/avatar/1.jpg',


        ],
        comment: [],
        support: []
      }
    ]




  },
  onClickShow(e) {
    const images = this.data.pageList.images;
    //数据绑定
    this.setData({
      show: true,
      gallery: images
    });
  },
  //隐藏画廊
  onClickHide() {
    this.setData({
      show: false,
      show1: false
    });
  },
  noop() {},

  onLoad: function (options) {
    //获取当前页面的下表
    const index = this.options.id;
    this.data.currentPostId = index;
    //遍历数据找到id号对应数据的数组下表
    var that = this;
    for (var i = 0; i < that.data.pageList.length; i++) {
      if (that.data.pageList[i].id == that.data.currentPostId) {
        that.data.index = that.data.currentPostId
      }
    }
    //渲染对应下标的数据
    var pageList = this.data.pageList[this.data.index];
    var comments = pageList.comments
    //将表情渲染进去
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
      pageList: pageList,
      comments: comments,
      emojis: emojis,
      isShow: that.data.isShow,
      isLoad: that.data.isLoad
    });
    // 引入字体
    wx.loadFontFace({
      family: 'HYZhengYuan',
      source: 'url("http://hellofonts.oss-cn-beijing.aliyuncs.com/%E6%B1%89%E4%BB%AA%E6%AD%A3%E5%9C%86/5.01/HYZhengYuan-85W.ttf")',
      success: console.log()

    })
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
    })
  }, //点击动态页面的发评论输入框时
  click: function (e) {
    //获取当前评论动态的id编号
    this.data.id = e.currentTarget.dataset.id;
    this.setData({
      show1: true
    })
  },
  inputFocus(e) {
    var inputHeight = 0
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
    const commentId = this.data.id;
    //有问题，应该获取的事是登陆的学号
    const userId = getApp().globalData.userInfo.nickName;
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        name: name,
        comment: comment,
        commentId: commentId,
        userId: userId
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
      comment: ''
    })
  },
})