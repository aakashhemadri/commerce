const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
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
    property: [{
        title: String,
        description: String,
    }],
    imageURL: {
        type: String,
        default: "https://via.placeholder.com/500x250",
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: false,
    }],
})

const Seller = mongoose.model('Seller', SellerSchema);

module.exports = Seller;