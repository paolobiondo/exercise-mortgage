const mysql = require('mysql2/promise')
const dbConfig = require("../configs/db.config")

module.exports = class Product {
    id = null
    name = null 
    bank = null

    constructor(name, bank) {
        this.name = name
        this.bank = bank
    }

    async addProduct() {
        const product = await Product.retrieveProduct(this.name)
        try {
            if(product.length == 0) {
                const conn = await mysql.createConnection(dbConfig)
                const querySQL = `INSERT INTO Product (name,bank) VALUES ('${this.name}','${this.bank}');`
                const record =  await conn.query(querySQL)
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
            let querySQL = `SELECT * FROM Product WHERE name='${name}'`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL)
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