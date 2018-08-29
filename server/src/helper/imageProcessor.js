const gm = require("gm")
const { getImagePath } = require("./file")

/* save square fit 400x400 px */
exports.saveMiniSize = fileName =>
  new Promise((resolve, reject) => {
    gm(getImagePath(fileName)).size(function(err, size) {
      if (err) {
        console.log("square resolution image gm.size --Err:", err)
        reject()
      }
      this.gravity("Center")
      this.extent(
        Math.max(size.width, size.height),
        Math.max(size.width, size.height),
      )
      this.resize(400, 400)
      this.write(getImagePath(`Sqr_${fileName}`), error => {
        if (!err) {
          console.log("saved")
          resolve()
        } else {
          console.log("square resolution image gm.write --Err:", error)
          reject()
        }
      })
    })
  })

/* save high resolution */
exports.saveHighResolution = (fileName, photoSize) =>
  new Promise((resolve, reject) => {
    gm(getImagePath(fileName)).size(function(err, size) {
      if (err) console.log("High resolution image gm.size --Err:", err)
      if (photoSize <= 1572864)
        this.write(getImagePath(`high_${fileName}`), error => {
          if (!error) resolve()
          else {
            console.log("square resolution image gm.write --Err:", error)
            reject()
          }
        })
      else {
        const max = Math.max(size.width, size.height)
        const scale = max <= 1000 ? 500 / max : 1000 / max
        this.resize(size.width * scale, size.height * scale)
        this.write(getImagePath(`high_${fileName}`), error => {
          if (!error) resolve()
          else {
            console.log("square resolution image gm.write --Err:", error)
            reject()
          }
        })
      }
    })
  })
