const request = require('superagent')
const config = require('../../config')
const domain = config.default.server



export const getSinglePhotoData = imagename => request
    .get(config.default.server + `/load/single/${imagename}`)
    .then((res) => res.body)
    .catch((err) => console.log(err))

export const addComment = (info, comment) => request
  .post(domain + '/addComment')
  .send({...info, ...comment})

export const sendLike = info => request
  .post(domain + '/addLike')
  .send({...info})
  .then(() => {
    console.log('like state saved')
  })
  .catch(err => {
    console.log(err)
  })