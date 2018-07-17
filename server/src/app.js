const express = require('express')
// const router = require('./router/index')
const database = require('./db/index')

const PORT = process.env.PORT || 3000


const app = express()
console.log(database.connect('d'))
// database.connect('instalite_db')
// app.use('/', router)

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
})