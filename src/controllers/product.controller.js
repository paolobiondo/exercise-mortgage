import productModel from "../models/product.model.js";

class ProductController {
    async addProduct(req, res) {
        /*  API add a new product
            method: POST
            body: name, bank (id)
        */
        const name = req.body.name
        const bank = req.body.bank

        if(!name || !bank) return res.status(400).json({'error':'fill all fields'})

        const product = new productModel(name, bank)
        const response = await product.addProduct()
        return res.status(response.status).json(response.content)
    }
}


export default new ProductController();