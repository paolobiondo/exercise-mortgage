import mysql from "mysql2/promise";
import dbConfig from "../configs/db.config.js";

export default class User {
    id = null
    username = null
    codice_fiscale = null
    
    constructor(username, codice_fiscale) {
        this.username = username
        this.codice_fiscale = codice_fiscale
    }

    async addUser() {
        const user = await User.retrieveUser(this.username)
        try {
            if(user.length == 0) {
                const conn = await mysql.createConnection(dbConfig)
                const querySQL = `INSERT INTO User (username,codice_fiscale) VALUES (?,?);`
                const record =  await conn.query(querySQL, [this.username, this.codice_fiscale])
                if(record) console.log("User Added")
                await conn.end()
                return {'content':{'message':'user added'},'status':200}
            } 
            else console.log("User already exists")
            return {'content':{'message':'user already exists'},'status':200}
        } catch(err) {
            console.log(`error: ${err}`)
            return {'content':{'error':'error while adding user'},'status':500}
        }
    }

    static async retrieveUser(username) {
        try {
            let querySQL = `SELECT * FROM User WHERE username=?`
            const conn = await mysql.createConnection(dbConfig)
            const [rows] = await conn.query(querySQL, [username])
            let user = []
            if(rows.length > 0) {
                user = new User(rows[0].username,rows[0].codice_fiscale)
                user.id = rows[0].id
            }
            await conn.end()
            return user
        } catch(err) {
            console.log(`error: ${err}`)
        }
    }
}

