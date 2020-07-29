const app = getApp();
// //云开发数据库
// const cloud = require('wx-server-sdk')

const db = wx.cloud.database();
wx.cloud.init({
  // env 参数说明：
  //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
  //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
  //   如不填则使用默认环境（第一个创建的环境）
  env: 'super-ooho',
  traceUser: true,
})
Page({
  data: {
    moment:{
      title:'hahah',
      imgUrl: [],
      content: '',
    },
    // imgUrl:[],
    fileIDs:[],
    show:true  //控制按钮的替换
  },
  onLoad: function (options) {

  },
  input: function (e) {
    if (e.detail.value.length) {
      const content = e.detail.value;
      const reg = /^[\w\W]{1,20}$/;
      if (!reg.test(content)) {
        console.log('太长了')
      }

    }
    let content='moment.content'
  //  this.data.moment.content=e.detail.value;
    this.setData({
      [content]: e.detail.value
    })
    // console.log(content)
  },
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        console.log(res);
        if (res.tempFilePaths.length > 0) {

          // //图如果满了1张，不显示加图
          if (res.tempFilePaths.length == 1) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }

          //把每次选择的图push进数组
          let imgUrl = that.data.moment.imgUrl;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            imgUrl.push(res.tempFilePaths[i])
          }
          
          that.setData({
            imgUrl: imgUrl
          })

        }

      }
    })
   
  },
  //上传图片按钮事件
  img_upload: function () {
    wx.showLoading({
      title: '上传中',
    })
      const promiseArr = []
      //只能一张张上传 遍历临时的图片数组
      for (let i = 0; i < this.data.moment.imgUrl.length;i++) {
        let filePath = this.data.moment.imgUrl[i]
        let suffix = /\.[^\.]+$/.exec(filePath)[i];  // 正则表达式，获取文件扩展名
        //在每次上传的时候，就往promiseArr里存一个promise，只有当所有的都返回结果时，才可以继续往下执行
        promiseArr.push(new Promise((reslove,reject)=>{
          wx.cloud.uploadFile({
            cloudPath: new Date().getTime() + suffix, 
            filePath: filePath, // 文件路径
          }).then(res => {
            // get resource ID
            console.log(res.fileID)
            wx.cloud.getTempFileURL({
              fileList: [{
                fileID: res.fileID,
                maxAge: 60 * 60, // one hour
              }]
            }).then(res => {
              // get temp file URL
              console.log(res.fileID);
              let imgUrl="moment.imgUrl"
              this.setData({
                [imgUrl]: res.fileList[0].tempFileURL.toString()
              })
              // tres.fileList[0].tempFileURL.toString();
             
             this.setData({
               moment:this.data.moment,//将图片在云开发的路径存入data数据中
               show:false  //上传图片按钮消失，发布动态按钮出现
             })
             wx.hideLoading()
             wx.showToast({
               title: '上传成功',
             })
            }).catch(error => {
             console.log(error)
            })
            reslove()
          }).catch(error => {
            console.log(error)
          })
        }))
      }
      Promise.all(promiseArr).then(res=>{
        db.collection('comments').add({
          data: {
            fileIDs: this.data.fileIDs //只有当所有的图片都上传完毕后，这个值才能被设置，但是上传文件是一个异步的操作，你不知道他们什么时候把fileid返回，所以就得用promise.all
          }
        }).then(res => {
            console.log(res)
            wx.hideLoading()
            wx.showToast({
              title: '提交成功',
            })
          })
          .catch(error => {
            // console.log(error)
          })
      })
    
    
    },
  
    
 

  // 法术东
  send () {
    let that=this;
    console.log(that.data.moment)
    that.data.moment.imgUrl= that.data.moment.imgUrl.toString();
    // that.data.moment.imgUrl=decodeURIComponent( that.data.moment.imgUrl);
    console.log( that.data.moment.imgUrl)
    let token=wx.getStorageSync('token');
    wx.request({
      //路径填你上传图片方法的地址
      url: `${app.globalData.baseUrl}/moment/createMoment`,
      method:"POST",
     data: {
        moment:JSON.stringify(
          {
            title:that.data.moment.title,
            imgUrl:that.data.moment.imgUrl,
            content:that.data.moment.content
          }
        )
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 1) {
          wx.hideLoading()
          wx.showModal({
            title: '提交成功',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/dynamic/dynamic',
                })
              }
            }
          })
        }
      }, fail: function (res) {
        console.log('上传失败')
      }

    })
  },
})
