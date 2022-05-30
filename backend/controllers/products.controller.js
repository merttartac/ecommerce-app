const Product = require('../models/Product');

//GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error })
    }
};

//SUBMIT PRODUCT
const submitProduct = async (req, res) => {
    try {
        const product = new Product({
            //MODEL MONGODB'YE GORE DEGISECEK
            brand: req.body.brand,
            model: req.body.model,
            category: req.body.category,
            price: req.body.price
        });

        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports = {
    submitProduct,
    getProducts
}