const fs = require('fs')

module.exports = function (filePath, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, 'utf8', err => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}
