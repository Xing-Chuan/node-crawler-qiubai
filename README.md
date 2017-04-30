
# node 爬虫 - 糗事百科

抓取糗百热门内容, 可以自定义配置抓取页面数量和内容类型

## 起步

1. 安装 node 环境
2. git clone 或下载 zip 压缩包解压
3. 项目根目录打开 Terminal 终端
4. 输入 `npm install`, 安装依赖模块
5. 输入 `node app.js`, 启动项目
6. 在 `content/qiubai.json` 查看抓取到的内容

## 配置

项目根目录的 config.js 可配置抓取内容

```js
/**
 * [page description]
 * @type {String}
 * 设置需要抓取的页数
 */
const page = '2'
/**
 * [getContent description]
 * @type {String}
 * 8hr - 8 小时热门
 * 24hr - 24 小时热门
 * 最多只能设置 35 页
 */
const getContent = '8hr'
```

## 执行界面效果图

![snipaste_20170430_133944.png](http://upload-images.jianshu.io/upload_images/4434201-441ebe9d16947466.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
