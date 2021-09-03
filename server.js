//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

app.use(express.json());

// app.use(express.static(path.resolve(__dirname, '../frontend/build')));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));

// routes
app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
//  res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
//});
