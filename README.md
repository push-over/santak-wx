# native-miniprogram 原生小程序

## 项目结构

### config
环境配置，index.js中的mode值根据环境不同和config下的文件名保持一致

### images
图片资源

### model
数据获取、处理类，以 ES6 类的形式进行扩展，使用 wx.request 发送请求

### pages
主包包含的页面

### template
模板文件

### components
自定义组件

### utils
帮助方法

## Tips

### appid
在project.config.json中更换项目对应的appid

### ./utils/custom-event.js
事件订阅和发布

### ./utils/storage.js
本地存储时，区分环境（小程序的本地存储，体验版和正式版使用的是同一个storage）