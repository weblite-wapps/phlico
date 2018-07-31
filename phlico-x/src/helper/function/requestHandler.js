const request = require('superagent')
const config = require('../../config')
const domain = config.default.server


export const getAll = wisId => request
    .get(domain + `/load/all/${wisId}`)
    .then(res => res.body)
    .catch(err => err)

export const savePhoto = (info, photo) => {
  const formData = new FormData();

  formData.append("wisId", info.wisId);
  formData.append("userId", info.userId);
  formData.append("userName", info.userName);
  formData.append("caption", photo.caption);
  formData.append("image", photo.file);
    return request
    .post(domain + '/upload')
    .send(formData)
}

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


export const deletePhoto = info => request
  .post(domain + '/remove')
  .send({...info})
