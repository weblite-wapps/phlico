const express = require('express')
// const router = require('./router/index')
// const database = require('./db/index')

const PORT = process.env.PORT || 30000;
app = express()
// database.connect('instalite_db')
// app.use('/', router)

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
})