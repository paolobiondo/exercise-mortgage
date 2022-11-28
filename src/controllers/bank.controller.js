import bankModel from "../models/bank.model.js";

class BankController {
    async addBank(req, res) {
        /*  API add a new bank
            method: POST
            body: name
        */
        const name = req.body.name
        const additional = req.body.additional

        if(!name) return res.status(400).json({'error':'fill name field'})

        const bank = new bankModel(name, additional)
        const response = await bank.addBank()
        return res.status(response.status).json(response.content)
    }
}
export default new BankController();