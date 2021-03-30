var express = require('express');
var router = express.Router();
const sellerModel = require('../models/seller');

router.get('/list', async (req, res) => {
    const sellers = await sellerModel.find({});

    try {
        res.status(200).send(sellers);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const seller = await sellerModel.findById(req.params.id, req.body);
        res.status(200).send(seller);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    const seller = new sellerModel(req.body);
    try {
        await seller.save();
        res.status(200).send('Success');
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        await sellerModel.findByIdAndUpdate(req.params.id, req.body);
        await sellerModel.save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const seller = await sellerModel.findByIdAndDelete(req.params.id);

        if (!seller) res.status(404).send("No item found");
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;