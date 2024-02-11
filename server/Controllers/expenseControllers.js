const expenseModel = require('../Models/expenseModel');

module.exports.addexpense = (req, res) => {
    let { title, date, category, amount, description} = req.body;
    expenseModel.create({ title, date, category, amount, description})
        .then(()=> {
            res.status(200).json({status: true, msg:"expense Added Succesfully"});
        })
        .catch((e) => {
            console.log("Error in adding expense:",e );
            res.status(400).json({status: false, msg:"Problem Adding expense"});
        })
}