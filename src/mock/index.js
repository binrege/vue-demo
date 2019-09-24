import Mock from 'mockjs'

//模拟一个接口数据
//第一个参数：接口路径  第二个参数：请求方式  第三个参数：返回的数据
Mock.mock('api/getCarts','get',{
    code:200,
    msg:'success',
    data: [
        {
          isSelected: false,
          productCover: "https://img10.360buyimg.com/cms/s80x80_jfs/t6094/107/710811867/382815/4d54717/592bf165N755a88f0.jpg",
          productName: "深入浅出Node.js",
          productInfo: "Node.js学习",
          productPrice: "57.80",
          productCount: 1
        },
        {
          isSelected: false,
          productCover: "https://img1.doubanio.com/view/subject/l/public/s29029037.jpg",
          productName: "Vue.js权威指南",
          productInfo: "Vue.js实战",
          productPrice: "99.00",
          productCount: 3
        },
        {
          isSelected: false,
          productCover: "https://img3.doubanio.com/view/subject/l/public/s31471882.jpg",
          productName: "深入浅出Vue.js",
          productInfo: "Vue.js学习",
          productPrice: "79.00",
          productCount: 3
        },
        {
          isSelected: false,
          productCover: "https://img3.doubanio.com/view/subject/l/public/s29662615.jpg",
          productName: "Vue移动开发实战技巧",
          productInfo: "Vue.js移动端开发",
          productPrice: "79.00",
          productCount: 7
        },
        {
          isSelected: false,
          productCover: "https://img3.doubanio.com/view/subject/l/public/s29350830.jpg",
          productName: "从零开始学微信小程序开发",
          productInfo: "微信小程序开发",
          productPrice: "59.00",
          productCount: 3
        }
      ]

        
})
