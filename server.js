require('dotenv/config')
const express = require("express")
const userRouter = require('./src/routes/user.route')

const port = process.env.PORT
const server = express()

// middleware 
server.use(express.json())
server.use(express.urlencoded({extended: true}))

// routes
server.use("/api/v1/user", userRouter)

server.listen(port, () => {
    console.log("server is listening...")
})
