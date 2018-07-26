const request = require('superagent')
const config = require('../../config')


export const getAll = wisid => request
		.get(config.default.server + `/load/all/${wisid}`)
		.then(res => res.body)
		.catch(err => console.log(err))

export const deletePhoto = imagename => request
    .delete(config.default.server + `/img/${imagename}`)
    .then(() => console.log('Photo deleted'))
    .catch(err => console.log("cant delete photo", err))

export const savePhoto = (info, photo) => {
  const formData = new FormData();
  const domain = config.default.server

  formData.append("wisid", info.wisid);
  formData.append("userid", info.userid);
  formData.append("username", info.username);
  formData.append("caption", photo.caption);
  formData.append("image", photo.file);

  return request
    .post(domain + '/upload')
    .send(formData)
}

export const addComment = (info, comment) => {
  const domain = config.default.server
  
  return request
    .post(domain + '/addComment')
    .send({...info, ...comment})
    .then(() => {
      //Do thing show an animation or check thing play sound
      console.log('comment sent')
    })
    .catch((err) => {
      //Do opposite
      console.log(err)
    })
}
