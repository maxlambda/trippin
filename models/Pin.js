//jshint esversion:6
const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    displayname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 2
    },
    desc: {
        type: String,
        required: true,
        min: 2
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Pin", PinSchema);