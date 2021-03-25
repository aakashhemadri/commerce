var express = require('express');
var router = express.Router();
const productModel = require('../models/product');

router.get('/product/list', async (req, res) => {
    const products = await productModel.find({});

    try {
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/product/:id', async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id, req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/product', async (req, res) => {
    const product = new productModel(req.body);
    try {
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/product/:id", async (req, res) => {
    try {
        await productModel.findByIdAndUpdate(req.params.id, req.body);
        await productModel.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/product/:id", async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);

        if (!product) res.status(404).send("No item found");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;