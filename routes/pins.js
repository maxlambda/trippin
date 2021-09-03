//jshint esversion:8
const router = require('express').Router();
const Pin = require("../models/Pin");

// ***********************************************************************
// Create a pin

router.post("/", async (req, res) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin); // success: send the saved pin
    } catch (err) {
        res.status(500).json(err); // error
    }
});

// ***********************************************************************
// Delete a pin

router.post("/delete", async (req, res) => {
    const pin = req.body;

    Pin.findByIdAndDelete(pin._id, (err) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Pin successfully deleted",
            id: pin._id
        };
        return res.status(200).send(response);
    });
});


// ***********************************************************************
// Get all pins

router.get("/", async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;