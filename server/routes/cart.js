var express = require('express');
var router = express.Router();
const cartModel = require('../models/cart');

router.get('/list', async (req, res) => {
    const carts = await cartModel.find({});

    try {
        res.status(200).send(carts);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cart = await cartModel.findById(req.params.id, req.body);
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/cart', async (req, res) => {
    const cart = new cartModel(req.body);
    try {
        await cart.save();
        res.status(200).send('Success');
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        await cartModel.findByIdAndUpdate(req.params.id, req.body);
        await cartModel.save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const cart = await cartModel.findByIdAndDelete(req.params.id);

        if (!cart) res.status(404).send("No item found");
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;