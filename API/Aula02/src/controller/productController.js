const productService = require('../service/product.js');

async function getAllProduct(req, res){
    try{
        const rows = await productService.getAllProduct();
        res.status(200).json(rows);
    }catch(error){
        res.status(500).send({
            message: "Error getting product",
            body: error.message,
        })
    }
}
async function createProduct(req, res){
    try{
        const {nome, preco, estoque} = req.body;

        await productService.createProduct(nome, preco, estoque);
        res.status(201).json({ message: "Success"})
    }catch(error){
        res.status(500).send
    ({
        message: "Error adding product!",
        error:error.message,
    })    
}
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const { nome, preco, estoque } = req.body;
        await productService.updateProduct(id, nome, preco, estoque);
        res.status(200).json("Success");
    } catch(error) {
        res.status(500).send({
            message: 'Error updating product',
            body: error.message,
        })
    }
}

async function deleteProduct(req, res){
    try {
        const {id } = req.params;
        await productService.deleteProduct(id);
        res.status(200).send({message: "Deleted product!"});
    } catch (error) {
        res.status(500).send({
            message: "Error deleting product!",
            error: error.message,
        })
    }
}

async function getProductById(req, res){
    try {
        const { id } = req.params;
        const product = await pruductService.getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({
            message: "Error getting product ID!",
            error: error.message,
        })
    }
}


module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById
}