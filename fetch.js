
const axios = require('axios')

function fetch(reqUrl) {
   return new Promise((resolve, reject) => {
      axios({
        url: reqUrl,
        method: 'get',
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'}
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
   })
 } 

module.exports = fetch
