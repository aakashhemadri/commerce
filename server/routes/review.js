var express = require('express');
var router = express.Router();
const reviewModel = require('../models/review');

router.get('/list', async (req, res) => {
    const reviews = await reviewModel.find({});

    try {
        res.status(200).send(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const review = await reviewModel.findById(req.params.id, req.body);
        res.status(200).send(review);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/review', async (req, res) => {
    const review = new reviewModel(req.body);
    try {
        await review.save();
        res.status(200).send('Success');
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        await reviewModel.findByIdAndUpdate(req.params.id, req.body);
        await reviewModel.save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const review = await reviewModel.findByIdAndDelete(req.params.id);

        if (!review) res.status(404).send("No item found");
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;