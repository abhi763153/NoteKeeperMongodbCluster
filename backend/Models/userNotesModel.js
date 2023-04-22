const mongoose = require('mongoose');

const note = new mongoose.Schema({
    id: Number,
    title: String,
    description: String
})

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    notes: [note]
});

const User = new mongoose.model("User", userSchema);


module.exports = User;