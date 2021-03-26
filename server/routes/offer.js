var express = require('express');
var router = express.Router();
const offerModel = require('../models/offer');

router.get('/list', async (req, res) => {
    const offers = await offerModel.find({});

    try {
        res.status(200).send(offers);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const offer = await offerModel.findById(req.params.id, req.body);
        res.status(200).send(offer);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/offer', async (req, res) => {
    const offer = new offerModel(req.body);
    try {
        await offer.save();
        res.status(200).send('Success');
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        await offerModel.findByIdAndUpdate(req.params.id, req.body);
        await offerModel.save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const offer = await offerModel.findByIdAndDelete(req.params.id);

        if (!offer) res.status(404).send("No item found");
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;