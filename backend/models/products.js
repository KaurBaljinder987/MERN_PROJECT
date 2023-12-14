const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: String,
    description: String,
    stock: Number,
    price: Number,
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;