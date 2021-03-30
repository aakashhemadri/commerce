const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: false,
        },
        quantity: Number,
    }],
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;