const request = require('superagent')
const config = require('../../config')



export const getSinglePhotoData = imagename => request
    .get(config.default.server + `/load/single/${imagename}`)
    .then((res) => res.body)
    .catch((err) => console.log(err))

export const addComment = (info, comment) => {
  const domain = config.default.server

  return request
    .post(domain + '/addComment')
    .send({...info, ...comment})
    .then((res) => {
      //Do thing show an animation or check thing play sound
      console.log('comment sent', res)
    })
    .catch((err) => {
      //Do opposite
      console.log(err)
    })
}
