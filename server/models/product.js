const mongoose = require("mongoose");
const Seller = require('./seller');
const Offer = require('./offer');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    category: String,
    property: [{
        title: String,
        description: String,
    }],
    imageURL: {
        type: String,
        default: "https://via.placeholder.com/500x250",
    },
    price: {
        type: Number,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: false,
    }],
    offers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
        required: false,
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: false,
    },
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;