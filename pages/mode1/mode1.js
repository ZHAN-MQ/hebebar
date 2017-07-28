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
    var that = this;
    wx.getScreenBrightness({
      success: function (res) {
        that.data.i = res.value;
      },
    });
    wx.setKeepScreenOn({
      keepScreenOn: true,
    });
    wx.setScreenBrightness({
      value: 1,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    });
    wx.redirectTo({
      url: '../index/index',
    })
  },

})
