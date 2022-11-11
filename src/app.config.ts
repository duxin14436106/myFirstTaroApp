export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/part/index',
    'pages/mine/index',
    'pages/cart/index'
  ],
  window: {
    backgroundTextStyle: 'dark',
    backgroundColor: '#ccc',
    navigationStyle: 'default',
    navigationBarBackgroundColor: '#333',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    enablePullDownRefresh: true
  },
  tabBar: {
    selectedColor: '#f85050',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: './asset/image/shouye.png',
      selectedIconPath: './asset/image/shouye-active.png',
    },{
      pagePath: 'pages/part/index',
      text: '分类',
      iconPath: './asset/image/part.png',
      selectedIconPath: './asset/image/part-active.png',
    },{
      pagePath: 'pages/cart/index',
      text: '购物车',
      iconPath: './asset/image/cart.png',
      selectedIconPath: './asset/image/cart-active.png',
    }, {
      pagePath: 'pages/mine/index',
      text: '我的',
      iconPath: './asset/image/mine.png',
      selectedIconPath: './asset/image/mine-active.png',
    }]
  }
})
