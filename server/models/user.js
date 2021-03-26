const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    photo: {
        type: String,
        default: "https://via.placeholder.com/128x128",
    },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;