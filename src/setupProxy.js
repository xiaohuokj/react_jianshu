const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app) {
  app.use('/api',
      createProxyMiddleware({
            target: 'https://www.jianshu.com',
            changeOrigin: true,
            pathRewrite:{
              "^/api":"/"	// 如果是/api开头的请求全部跳至target对应的地址
            }
          }
      ));
}