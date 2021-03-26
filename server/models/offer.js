const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    terms: [String],
})

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;