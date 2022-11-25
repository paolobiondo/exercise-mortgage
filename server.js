require('dotenv/config')
const express = require("express")
const userRouter = require('./src/routes/user.route')
const bankRouter = require('./src/routes/bank.route')
const productRouter = require('./src/routes/product.route')

const port = process.env.PORT
const server = express()

// middleware 
server.use(express.json())
server.use(express.urlencoded({extended: true}))

// routes
server.use("/api/v1/users", userRouter)
server.use("/api/v1/banks", bankRouter)
server.use("/api/v1/products", productRouter)



server.listen(port, () => {
    console.log("server is listening...")
})
