const mysql = require('mysql2/promise')
const dbConfig = require("../configs/db.config")

const bankModel = require('../models/bank.model')

module.exports = class Prospect {
    id = null
    bank = null // integer
    product = null // integer
    user = null
    instalment = null
    tan = null
    taeg = null
    additional = null
    created = null

    constructor(bank, product, user, instalment, tan, taeg, additional) {
        this.bank = bank
        this.product = product
        this.user = user
        this.instalment = instalment
        this.tan = tan
        this.taeg = taeg
        this.additional = JSON.parse(additional)
    }

    async addProspect() {
        try {
            let additional = null
            if(this.additional)
                additional = JSON.stringify(this.additional)
            
            const conn = await mysql.createConnection(dbConfig)
            const querySQL = `INSERT INTO Prospect (bank, product, user, instalment, tan, taeg, additional) 
                                VALUES ('${this.bank}','${this.product}','${this.user}','${this.instalment}','${this.tan}',
                                '${this.taeg}','${additional}');`
            const record =  await conn.query(querySQL)
            if(record) console.log("Prospect Added")
            await conn.end()
            return {'content':{'message':'prospect added'},'status':200}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while adding prospect'},'status':500}
        }
    }

    static async retrieveProspectByID(idProspect) {
        try {
            let querySQL = `SELECT * FROM Prospect WHERE id='${idProspect}'`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL)
            let prospect = []
            if(rows.length > 0) {
                prospect = new Prospect(rows[0].bank, rows[0].product, rows[0].user, rows[0].instalment, rows[0].tan, rows[0].taeg, JSON.stringify(rows[0].additional))
                prospect.id = rows[0].id
                prospect.created = rows[0].created
                return {'content':prospect,'status':200}
            } 
            await conn.end()
            return {'content':{'error':'prospect not found'},'status':400}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while getting prospect'},'status':500}
        }
    }
}   