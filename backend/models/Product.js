const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, { collection: 'products' });

module.exports = mongoose.model('Product', ProductSchema);