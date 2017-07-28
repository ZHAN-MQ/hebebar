var i = 0;
var handle;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    j:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getScreenBrightness({
      success: function (res) {
        that.data.j = res.value;
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    handle = setInterval(function () {
      if (i) {
        i = 0;
        wx.setScreenBrightness({
          value: i
        });
      }
      else {
        i = 1;
        wx.setScreenBrightness({
          value: i
        });
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(handle);
    var that = this;
    wx.setScreenBrightness({
      value: 0.5,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(handle);
    var that = this;
    wx.setScreenBrightness({
      value: 0.5,
    });
    wx.redirectTo({
      url: '../index/index',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})