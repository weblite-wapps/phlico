const request = require('superagent')
const config = require('../../config')
const domain = config.default.server


export const getSinglePhotoData = imageName => request
    .get(domain + `/load/single/${imageName}`)
    .then((res) => res.body)
    .catch((err) => console.log(err))

export const addComment = (info, comment) => request
  .post(domain + '/addComment')
  .send({...info, ...comment})

export const addLike = info => request
  .post(domain + '/addLike')
  .send({...info})
  .then(() => {
    console.log('like state saved')
  })
  .catch(err => {
    console.log(err)
  })
