
# node 爬虫 - 糗事百科

抓取糗百热门内容, 可以自定义配置抓取页面数量和内容类型

如果觉得这是个好玩的东西, 欢迎你的 Star , \(^o^)/

使用 Promise 和一些 ES6 常用语法完成, 具体可看代码, 后面也有介绍.

## Table of Contents

<!-- MarkdownTOC -->

- [起步](#%E8%B5%B7%E6%AD%A5)
- [配置](#%E9%85%8D%E7%BD%AE)
- [执行界面效果图](#%E6%89%A7%E8%A1%8C%E7%95%8C%E9%9D%A2%E6%95%88%E6%9E%9C%E5%9B%BE)
- [技术细节](#%E6%8A%80%E6%9C%AF%E7%BB%86%E8%8A%82)
    - [使用的框架](#%E4%BD%BF%E7%94%A8%E7%9A%84%E6%A1%86%E6%9E%B6)
    - [实现思路](#%E5%AE%9E%E7%8E%B0%E6%80%9D%E8%B7%AF)

<!-- /MarkdownTOC -->


## 起步

1. 安装 node 环境
2. git clone 或下载 zip 压缩包解压
3. 项目根目录打开 Terminal 终端
4. 输入 `npm install`, 安装依赖模块
5. 输入 `node app.js`, 启动项目
6. 在 `content/qiubai.json` 查看抓取到的内容

## 配置

项目根目录的 `config.js` 可配置抓取内容

```js
/**
 * [page description]
 * @type {String}
 * 设置需要抓取的页数
 * 最多只能设置 35 页
 */
const page = '2'
/**
 * [getContent description]
 * @type {String}
 * 8hr - 8 小时热门
 * 24hr - 24 小时热门
 */
const getContent = '8hr'
```

## 执行界面效果图

![snipaste_20170430_133944.png](http://upload-images.jianshu.io/upload_images/4434201-441ebe9d16947466.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 技术细节

### 使用的框架

- cheerio 服务端的 jQuery, 操作页面结构用
- axios 封装 Ajax API 的插件, Promise 写法
- fs Nodejs 内置模块, 操作本地文件

### 实现思路

1. 分析 HTML 的结构, 提取出页面 url 与页码之间的关系.
2. 使用 axios 获取页面 HTML 代码.
3. 使用 cheerio 处理得到的数据, 根据第 1 步分析的规则抽取需要的数据.(这时只能单页抓取)
4. 用 Promise 控制异步数据写入状态
5. 每个 appendFile 都封装成 Promise 实例, 当第 1 页全部写入完毕, 执行 Promise.all(), 根据规则变更请求 url 地址.
6. 模块化的思想, page 数值和 url 类型, 都在 `config.js` 里面配置, 使用时引入.


