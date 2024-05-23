const express = require("express");
const router = express.Router();
const productController = require('../controller/productController.js');

router.get("/product", productController.getAllProduct);
router.post("/product", productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);
router.get("/product/:id", productController.getProductById);

module.exports = router;