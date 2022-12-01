import mysql from "mysql2/promise";
import dbConfig from "../configs/db.config.js";

 export default class Bank {
    id = null
    name = null
    additional = null
    
    constructor(name, additional) {
        this.name = name
        this.additional = JSON.parse(additional)
    }

    async addBank() {
        const bank = await Bank.retrieveBank(this.name)
        try {
            if(bank.length == 0) {
                const conn = await mysql.createConnection(dbConfig)
                const querySQL = `INSERT INTO Bank (name,additional) VALUES ('${this.name}','${JSON.stringify(this.additional)}');`
                const record =  await conn.query(querySQL)
                if(record) console.log("Bank Added")
                await conn.end()
                return {'content':{'message':'bank added'},'status':200}
            } 
            else console.log("Bank already exists")
            return {'content':{'message':'bank already exists'},'status':200}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while adding bank'},'status':500}
        }
    }

    static async retrieveBank(name) {
        try {
            let querySQL = `SELECT * FROM Bank WHERE name='${name}'`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL)
            let bank = []
            if(rows.length > 0) {
                bank = new Bank(rows[0].name,JSON.stringify(rows[0].additional))
                bank.id = rows[0].id
            }
            await conn.end()
            return bank
        } catch(err) {
            console.log(`error: ${err}`)
        }
    }

    static async retrieveBankByID(idBank) {
        try {
            let querySQL = `SELECT * FROM Bank WHERE id='${idBank}'`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL)
            let bank = []
            if(rows.length > 0) {
                bank = new Bank(rows[0].name, JSON.stringify(rows[0].additional))
                bank.id = rows[0].id
                return {'content':bank,'status':200}
            } 
            await conn.end()
            return {'content':{'error':'bank not found'},'status':400}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while getting bank'},'status':500}
        }
    }
}

