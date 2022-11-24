const { query } = require("express")
const mysql = require('mysql2/promise')
const dbConfig = require("../configs/db.config")

module.exports = class User {
    username = ""
    codice_fiscale = ""
    

    async addUser(username, codice_fiscale) {
        this.useername = username
        this.codice_fiscale = codice_fiscale

        try {
            let querySQL = `SELECT * FROM User WHERE username='${username}'`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL)
            
            if(rows.length == 0) {
                querySQL = `INSERT INTO User (username,codice_fiscale) VALUES ('${username}', '${codice_fiscale}');`
                const record =  await conn.query(querySQL)
                if(record) console.log("User Added")
                return {'content':{'message':'user added'},'status':200}
            } 
            else console.log("User already exists")
            await conn.end()
            return {'content':{'message':'user already exists'},'status':200}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while adding user'},'status':500}
        }
    }
}



