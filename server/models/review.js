const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    rating: [{
        title: String,
        description: String,
    }],
    imageURL: {
        type: String,
        default: "https://via.placeholder.com/500x250",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;