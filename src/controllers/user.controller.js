import userModel from "../models/user.model.js";

class UserController {
    async addUser(req, res) {
        /*  API add a new user
            method: POST
            body: username, codice_fiscale
        */
        const username = req.body.username
        const codice_fiscale = req.body.codice_fiscale
        
        if(!username || !codice_fiscale) return res.status(400).json({'error':'fill all fields'})

        const user = new userModel(username,codice_fiscale)
        const response = await user.addUser()
        return res.status(response.status).json(response.content)
    }
}

export default new UserController();