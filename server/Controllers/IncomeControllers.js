const IncomeModel = require('../Models/IncomeModel');

module.exports.addIncome = (req, res) => {
    let { title, date, category, amount, description} = req.body;
    IncomeModel.create({ title, date, category, amount, description})
        .then(()=> {
            res.status(200).json({status: true, msg:"Income Added Succesfully"});
        })
        .catch((e) => {
            console.log("Error in adding income:",e );
            res.status(400).json({status: false, msg:"Problem Adding Income"});
        })
}