const express = require('express')
const router = require('./router/index')
const database = require('./db/index')

const PORT = process.env.PORT || 3000


const app = express()
database.connect('instalite_db')
app.use('', router)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}\n`)
})
