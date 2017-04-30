// require
const fetch = require('./fetch')
const cheerio = require('cheerio')
const appendFile = require('./append-file')
const config = require('./config')

// set variable
let pageNum = 1
let writeNum = 0
const page = config.page
const getContent = config.getContent
const url = `http://www.qiushibaike.com/${getContent}/page/${pageNum}/?s=4978418`

// 获取 page1 内容
fetchContent(url)

// cheerio 处理文本
function fetchContent(url) {
  fetch(url)
    .then(data => {   
      const $ = cheerio.load(data)
      const $articles = $('#content-left>div')
      const promises = []
      $articles.each((index, elem) => {
        const $elem = $(elem)
        const article = {}
        article.author = $elem.find('.author h2').text()
        article.content = $elem.find('.content>span').text()
        const articleStr = `
{
page: ${pageNum},
name：${article.author},
content：${article.content}
},`
        writeNum++
        console.log(`正在抓取第 ${pageNum} 页 --- 写入成功 : ${writeNum} 次`)
        promises.push(appendFile('./content/qiubai.json', articleStr))
      })

      // status control
      Promise.all(promises)
        .then(() => {
          if (pageNum > 35) {
            console.log(`最多只能抓取35页, 请重新设置`)
            return false
          }
          if (pageNum >= page) { 
            console.log(`
内容抓取完毕
------------------------------------------
作者: 纪行川
Github 主页: https://github.com/Xing-Chuan
------------------------------------------
              `)
            return false 
          }
          pageNum++
          const url = `http://www.qiushibaike.com/${getContent}/page/${pageNum}/?s=4978418`
          fetchContent(url)
        })
        .catch((err) => {
          console.log(err.message)
        })
    })
    .catch(err => {
      console.log(err.message)
    })
}
