//jshint esversion:6
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 18,
        unique: true
    },
    displayname: {
        type: String,
        required: true,
        min: 1,
        max: 18
    },
    email: {
        type: String,
        required: true,
        max: 75,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);