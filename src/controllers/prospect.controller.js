import prospectModel from "../models/prospect.model.js";

class ProspectController {
    async addProspect(req, res) {
        /*  API add a new prospect
            method: POST
            body: bank (id), product (id), user (id), instalment, tan, taeg
        */
        const product = req.body.product
        const bank = req.body.bank
        const user = req.body.user
        const instalment = req.body.instalment
        const tan = req.body.tan
        const taeg = req.body.taeg
        const additional = req.body.additional
        
        if(!bank || !product || !user || !instalment || !tan || !taeg ) return res.status(400).json({'error':'fill all fields'})

        const prospect = new prospectModel(bank, product, user, instalment, tan, taeg, additional)
        const response = await prospect.addProspect()
        return res.status(response.status).json(response.content)
    }

    async getProspect(req, res) {
        /*  API get a prospect
            method: GEt
            body:  id
        */
        const id = req.query.id
        
        if(!id) return res.status(400).json({'error':'fill id field'})

        const response = await prospectModel.retrieveProspectByID(id)
        return res.status(response.status).json(response.content)
    }
}

export default new ProspectController();