const express = require('express');
const app = express.Router();
require('dotenv').config();

const Product = require('../models/products');

// to add new products

app.post('/addProduct', async (req, res) => {
    try {
        const product = new Product({

            title: req.body.title,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price
        })

        const createProduct = await product.save()
        res.status(200).json({
            status: 'success',
            data: {
                createProduct
            }
        });
    }
    catch (err) {
        console.log("--error---", err)
        res.send(err);
    }
});


// to get all products

app.get('/getProducts', async (req, res) => {
    try {
        const ProductData = await Product.find()
        res.status(200).json({
            ProductData
        })
    }
    catch (err) {
        console.log("--error---", err)
        res.send(err);
    }
});


// view products by id

app.get("/viewProduct/:_id", async (req, res,) => {
    console.log("-----id---", req.params._id)
    // return
    try {
        const ProductData = await Product.findById(req.params._id)
        console.log("ProductData-----------", ProductData);
        res.json(ProductData)
    }
    catch (err) {
        console.log("---err--", err)
        res.send(err)
    }
}),


    // Delete Product

    app.delete('/deleteProduct/:Id', async (req, res) => {
        const ID = req.params.Id;
        console.log('---id----', ID)
        const ProductData = await Product.findOneAndDelete({ _id: ID })
        console.log("ProductData-----------", ProductData);
        res.status(200).json({
            message: "data deleted successfully"
        });
    })



// Update Product

app.put('/updateProduct/:Id', async (req, res) => {
    try {
        const Id = req.params.Id;
        const updateData = req.body;

        const updatedItem = await Product.findOneAndUpdate(
            { _id: Id },
            updateData,
            { new: true }
        );
        console.log("----updatedItem---", updatedItem)

        res.json(updatedItem);
    } catch (error) {
        console.log("-----error---", error)
        res.status(500).json({ error: ' update error' });
    }
});


module.exports = app;