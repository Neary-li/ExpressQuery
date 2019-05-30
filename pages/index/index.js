// pages/index/index.js
Page({
  
  /**
   * 组件的初始数据
   */
  data: {
    expressCom:'sf',
    expressNum:'',
    expressInfo:null,
    //快递公司数据
    company:[
      {
        "com": "顺丰",
        "no": "sf",
        "checked":"ture"
      },
      {
        "com": "申通",
        "no": "sto"
      },
      {
        "com": "圆通",
        "no": "yt"
      },
      {
        "com": "韵达",
        "no": "yd"
      },
      {
        "com": "天天",
        "no": "tt"
      },
      {
        "com": "中通",
        "no": "zto"
      },
      {
        "com": "京东快递",
        "no": "jd"
      },
      {
        "com": "EMS",
        "no": "ems"
      },
      {
        "com": "邮政快递",
        "no": "youzheng"
      },
    ]

  },
  //单项选择器change事件
  radioChange:function(e){
    // console.log(e.detail.value);
    //更新快递公司编号
    this.setData({
      expressCom: e.detail.value
    })
  },
  expressNumInput:function(e){
    //更新快递单号
  this.setData({
    expressNum:e.detail.value
  })
  },
  //按钮手指触摸离开事件
  queryBtn:function(){
    var that = this;
    var expressCom = this.data.expressCom;//获取快递公司单号
    var expressNum = this.data.expressNum;//获取快递单号
    // console.log(expressCom,expressNum);
    //根据快递公司编号和快递单号调用快递查询API接口
    wx.request({
      url:'https://v.juhe.cn/exp/index',
      data:{
        key:'b6f2aa7397b502a046421cf052b966d9',
        com:expressCom,
        no:expressNum
      },
      success:function(res){
        // console.log(res.data.result.list);
        //更新查询的物流信息
        that.setData({
          expressInfo: res.data.result.list
        })
      }
    })
  }

})
