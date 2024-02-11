const incomeCategoryModel = require('../Models/incomeCategoryModel');
const expenseCategoryModel = require('../Models/expenseCategoryModel');

module.exports.addincomeCategory = (req, res) => {
    let { title, description } = req.body;

    incomeCategoryModel.findOne({ title })
        .then( cat => {
            if (cat ) {
                res.status(400).json({ status: false, msg: "Category Already Exists" });
            }
            else {
                incomeCategoryModel.create({ title, description });
                res.status(200).json({ status: true, msg: "Category Added Succesfully" });
            }
        });
}

module.exports.addexpenseCategory = (req, res) => {
    let { title, description } = req.body;

    expenseCategoryModel.findOne({ title })
        .then( cat => {
            if (cat ) {
                res.status(400).json({ status: false, msg: "Category Already Exists" });
            }
            else {
                expenseCategoryModel.create({ title, description });
                res.status(200).json({ status: true, msg: "Category Added Succesfully" });
            }
        });
}