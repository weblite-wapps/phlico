import request from 'superagent'
import config from '../../config'


export const getAll = wisId => request
  .get(`${config.server}/load/all/${wisId}`)
  .then(res => res.body)

export const savePhoto = (info, photo) => {
  const formData = new FormData()

  formData.append("wisId", info.wisId)
  formData.append("userId", info.userId)
  formData.append("userName", info.userName)
  formData.append("caption", photo.caption)
  formData.append("image", photo.file)

  return request
    .post(config.server + '/upload')
    .send(formData)
}

export const addComment = (info, comment) => request
  .post(`${config.server}/addComment`)
  .send({ ...info, ...comment })

export const addLike = info => request
  .post(`${config.server}/addLike`)
  .send({ ...info })

export const deletePhoto = info => request
  .post(`${config.server}/remove`)
  .send({ ...info })
