const gm = require('gm')


/*save square fit 400x400 px*/
exports.saveMiniSize = (url, fileName) => new Promise(resolve => {
  gm(url + fileName)
    .size(function (err, size) {
      if (err) {
        console.log("square resolution image gm.size --Err:", err)
        reject()
      }
      this.gravity("Center")
      this.extent(Math.max(size.width, size.height), Math.max(size.width, size.height))
      this.resize(400, 400)
      this.write(`./public/images/Sqr_${fileName}`, (err) => {
        if (!err) {
          console.log("saved")
          resolve()
        }
        else {
          console.log("square resolution image gm.write --Err:", err)
          reject()
        }
      })
    })
})


/*save high resolution*/
exports.saveHighResolution = (url, fileName, photoSize) => new Promise(resolve => {
  gm(url + fileName)
    .size(function (err, size) {
      if (err) console.log("High resolution image gm.size --Err:", err)
      if (photoSize <= 1572864)
        this.write(`./public/images/${fileName}`, (err) => {
          if (!err) resolve()
          else {
            console.log("square resolution image gm.write --Err:", err)
            reject()
          }
        })
      else {
        var _max = Math.max(size.width, size.height)
        if (_max <= 1000) var _scale = 500 / _max
        else var _scale = 1000 / _max

        this.resize(size.width * _scale, size.height * _scale)
        this.write(`./public/images/${fileName}`, (err) => {
          if (!err) resolve()
          else {
            console.log("square resolution image gm.write --Err:", err)
            reject()
          }
        })
      }
    })
})
