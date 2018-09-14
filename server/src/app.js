// modules
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const https = require("https")
const fs = require("fs")
const path = require("path")
// router and db handler
const router = require("./router/router")
const database = require("./db/index")

const app = express()
database.connect("instalite_db")
app.use(cors({ origin: "*" }))
app.use(bodyParser.json())
app.use("/", router)

const key = fs.readFileSync(path.resolve("./src/certs/express.key"), "utf8")
const cert = fs.readFileSync(path.resolve("./src/certs/express.crt"), "utf8")

https.createServer({ key, cert }, app).listen(3094)
