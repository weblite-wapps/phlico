import request from 'superagent'
import config from '../../config'


export const getAll = wisId => request
  .get(`${config.server}/load/all/${wisId}`)
  .set('Access-Control-Allow-Origin', '*')
  .then(res => res.body)

export const savePhoto = (info, photo) => {
  const formData = new FormData()

  // console.log('info, photo:= ', info, photo)
  formData.append("wisId", info.wisId)
  formData.append("userId", info.userId)
  formData.append("creator", info.creator)
  formData.append("caption", photo.caption)
  formData.append("image", photo.file)

  return request
    .post(config.server + '/upload')
    .set('Access-Control-Allow-Origin', '*')
    .send(formData)
}

export const addComment = (info, comment) => request
  .post(`${config.server}/addComment`)
  .set('Access-Control-Allow-Origin', '*')
  .send({ ...info, ...comment })

export const addLike = info => request
  .post(`${config.server}/addLike`)
  .set('Access-Control-Allow-Origin', '*')
  .send({ ...info })

export const deletePhoto = info => request
  .post(`${config.server}/remove`)
  .set('Access-Control-Allow-Origin', '*')
  .send({ ...info })
