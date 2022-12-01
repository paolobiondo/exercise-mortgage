import mysql from "mysql2/promise";
import dbConfig from "../configs/db.config.js";
import bankModel from "../models/bank.model.js";

export default class Product {
    id = null
    name = null 
    bank = null

    constructor(name, bank) {
        this.name = name
        this.bank = bank
    }

    async addProduct() {
        const product = await Product.retrieveProduct(this.name)
        const bankObj = await bankModel.retrieveBankByID(this.bank)
        if(bankObj.content.error) return bankObj
        try {
            if(product.length == 0) {
                const conn = await mysql.createConnection(dbConfig)
                const querySQL = `INSERT INTO Product (name,bank) VALUES (?,?);`
                const record =  await conn.query(querySQL, [this.name, this.bank])
                if(record) console.log("Product Added")
                await conn.end()
                return {'content':{'message':'product added'},'status':200}
            } 
            else console.log("Product already exists")
            return {'content':{'message':'product already exists'},'status':200}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while adding product'},'status':500}
        }
    }

    static async retrieveProduct(name) {
        try {
            let querySQL = `SELECT * FROM Product WHERE name=?`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL, [name])
            let product = []
            if(rows.length > 0) {
                product = new Product(rows[0].name,rows[0].bank)
                product.id = rows[0].id
            }
            await conn.end()
            return product
        } catch(err) {
            console.log(`error: ${err}`)
        }
    }
}
