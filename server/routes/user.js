var express = require('express');
var router = express.Router();
const userModel = require('../models/user');

router.get('/list', async (req, res) => {
    const users = await userModel.find({});

    try {
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id, req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/user', async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.status(200).send('Success');
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.params.id, req.body);
        await userModel.save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);

        if (!user) res.status(404).send("No item found");
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;