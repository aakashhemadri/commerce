const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
        required: true,
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