import request from 'superagent'
import config from '../../config'
const domain = config.server

export const getSinglePhotoData = imageName =>
  request
    .get(domain + `/load/single/${imageName}`)
    .then(res => res.body)
    .catch(console.log)

export const addComment = (info, comment) =>
  request.post(domain + '/addComment').send({ ...info, ...comment })

export const addLike = info =>
  request
    .post(domain + '/addLike')
    .send({ ...info })
    .catch(console.log)
