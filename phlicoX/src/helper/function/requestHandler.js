const request = require('superagent')
const config = require('../../config')

const domain = 'http://localhost:3000'

exports.getAll = (wisid) => {
	request
		.get(config.server + `/${wisid}`)
		.then(res => res.body)
		.catch(err => console.log(err))
}

exports.savePhoto = (info) => {
  const formData = new FormData();
  const domain = 'http://localhost:3000'

  formData.append("wisid", info.wisid);
  formData.append("userid", info.userid);
  formData.append("username", info.username);

  formData.append("caption", info.caption);
  formData.append("image", info.file);

  request
    .post(domain + '/upload')
    .send(formData)
    .then(() => {
      //Do thing show an animation or check thing play sound
      console.log('photo sent')
    })
    .catch((err) => {
      //Do opposite
      console.log(err)
    })
}
