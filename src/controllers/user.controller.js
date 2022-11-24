const userModel = require('../models/user.model')

class userController {
    async addUser(req, res) {
        /*  API add a new user
            method: POST
            body: username, codice_fiscale
        */
        const username = req.body.username
        const codice_fiscale = req.body.codice_fiscale
        
        if(!username || !codice_fiscale) return res.status(400).json({'error':'fill all fields'})

        const user = await new userModel()
        const response = await user.addUser(username,codice_fiscale)
        return res.status(response.status).json(response.content)
    }
}

const userControllerObj = new userController()
module.exports = userControllerObj