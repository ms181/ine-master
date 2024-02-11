const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model("IncomeModel", incomeSchema);