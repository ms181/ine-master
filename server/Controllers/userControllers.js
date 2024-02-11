const jwt = require('jsonwebtoken');
const UserModel = require('../Models/userModel');
const secretKey = require('../modules/jwt').secretKey;

module.exports.signup = (req, res) => {
    let { name, email, password } = req.body;

    // check if user already exists
    UserModel.findOne({email})
        .then((user) => {
            if(!user){
                UserModel.create({name, email, password});
                const token = jwt.sign({name, email}, secretKey);
                console.log('Created Account: ', {name , email, password});
                res.status(200).json({status: true, token});
            } else {
                res.status(400).json({status: false, msg: "User Already Exists"});
            }
        })
}

module.exports.login = (req, res) => {

    let {email, password} = req.body;

    // check if user exits
    UserModel.findOne({email, password})
        .then((user) => {
            if(user) {
                const token = jwt.sign({email}, secretKey);
                res.status(200).json({status: true, token});
                console.log(email, "Logged In");
            } else {
                res.status(400).json({status: false, msg: "Invalid Username Or Password"});
            }
        })
}