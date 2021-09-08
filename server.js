//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'client/build')));

// Instead of the below, you can use the following lines for development on a local
// database.
//mongoose.connect("mongodb://localhost:27017/pinsDB").then(() => {
//    console.log("MongoDB connected");
//}).catch(err => console.log(err));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));

// routes
app.use("/pins", pinRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
