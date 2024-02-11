const mongoose = require('mongoose');

const incomeCategorySchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model("incomeCategoryModel", incomeCategorySchema);