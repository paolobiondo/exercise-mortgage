import express from "express";
import dotenv from 'dotenv'
dotenv.config()

import userRouter from "./src/routes/user.route.js";
import bankRouter from "./src/routes/bank.route.js";
import productRouter from "./src/routes/product.route.js";
import prospectRouter from "./src/routes/prospect.route.js";


const port = process.env.PORT
const server = express()

// middleware 
server.use(express.json())
server.use(express.urlencoded({extended: true}))

// routes
server.use("/api/v1/users", userRouter)
server.use("/api/v1/banks", bankRouter)
server.use("/api/v1/products", productRouter)
server.use("/api/v1/prospects", prospectRouter)


server.listen(port, () => {
    console.log(`server is listening ${port}...`)
})
