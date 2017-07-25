Page({

  /**
   * 页面的初始数据
   */
  data: {
    i: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    var that = this;
    wx.getScreenBrightness({
      success: function (res) {
        that.data.i = res.value;
        console.log(res.value)
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
    wx.setKeepScreenOn({
      keepScreenOn: true,
    });
    wx.setScreenBrightness({
      value: 1,
    });
  },

  onHide: function(){
    var that = this;
    wx.setScreenBrightness({
      value: that.data.i,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    wx.setScreenBrightness({
      value: that.data.i,
    })
  },

})
