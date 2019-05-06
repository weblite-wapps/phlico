// modules
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// router and db handler
const router = require("./router/router")
const database = require("./db/index")

const app = express()
database.connect("instalite_db")
app.use(cors({ origin: "*" }))
app.use(bodyParser.json())
app.use("/", router)


app.listen(3094, () => console.log('Server Running!'))
