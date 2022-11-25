const mysql = require('mysql2/promise')
const dbConfig = require("../configs/db.config")

module.exports = class Product {
    name = null 
    bank = null

    constructor(name, bank) {
        this.name = name
    }

}