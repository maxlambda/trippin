//jshint esversion:8
const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// ***********************************************************************
// Register a user using a hashed password. Uses bcrypt.

router.post("/register", async (req, res) => {

    try {
        // Generate a new password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        // Take passwords, hashes it to create a new password
        const hashedPassword = await bcrypt.hash(req.body.password, salt); // takes password, hashes it to create new password

        // Create a new user
        const newUser = new User({
            username: req.body.username,
            displayname: req.body.displayname,
            email: req.body.email,
            password: hashedPassword
        });

        // Save user and send response
        const savedUser = await newUser.save();
        res.status(200).json({ _id: savedUser._id, username: savedUser.username, displayname: savedUser.displayname });

    } catch (err) {
        res.status(500).json(err);
    }
});

// ***********************************************************************
// Login a user.

router.post("/login", async (req, res) => {
    try {
        // Find user
        const user = await User.findOne({ username: req.body.username });
        if (!user) res.status(400).json("Incorrect username and/or password combination.");

        // Validate user: compare typed password to user's hashed password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) res.status(400).json("Incorrect username and/or password combination.");

        // Send response (success)
        res.status(200).json({ _id: user._id, username: user.username, displayname: user.displayname, verified: user.verified });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ***********************************************************************
// Get all users

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;