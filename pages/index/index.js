var prex = 0;
const app = getApp()
Page({
  data: {
    img1: "../../images/img1.jpg",
    img2: "../../images/img2.jpg",
    x: 0,
    y: 0,
    hiddenimg: true
  },
  moveimg: function (e) {
    var that = this;
    prex = e.detail.x;
  },
  touchendimg: function (e) {
    console.log(e)
    console.log(prex)
    var that = this;
    if (prex < -200 || prex > 200) {
      that.setData({
        hiddenimg: false,
      }, () => {
        setTimeout(function () {
          that.setData({
            hiddenimg: true,
            img1: that.data.img2
          })
        }, 300)
      })
    } else {
      setTimeout(function () {
        that.setData({
          x: 0,
          y: 0
        })
      }, 300)
    }
  },
})
