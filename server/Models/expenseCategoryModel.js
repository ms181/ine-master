const mongoose = require('mongoose');

const expenseCategorySchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model("expenseCategoryModel", expenseCategorySchema);