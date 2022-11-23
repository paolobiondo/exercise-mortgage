require('dotenv/config')
const express = require("express")

const port = process.env.PORT
const server = express()

// middleware 
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.listen(port, () => {
    console.log("server is listening...")
})