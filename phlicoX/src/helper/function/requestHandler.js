const request = require('superagent')

const domain = 'http://localhost:3000'

module.exports = (wisid) => {
	request
		.get(domain + `/${wisid}`)
		.then(res => res.body)
		.catch(err => console.log(err))
}