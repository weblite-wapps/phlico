const express = require('express')
const router = require('./router/index')
const database = require('./db/index')

const gm = require('gm')

const PORT = process.env.PORT || 3000


const app = express()
// database.connect('d')
database.connect('instalite_db')
app.use('', router)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}\n\n`)
})

