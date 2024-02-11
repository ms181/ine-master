const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8
    }
})

const userModel = mongoose.model('UserModel', userSchema);

module.exports = userModel;