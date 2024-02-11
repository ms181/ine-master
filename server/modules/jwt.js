const jwt = require('jsonwebtoken');

module.exports.secretKey = "anykey";

module.exports.protect = (req, res, next) => {
    const secretKey = "anykey";
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({status: false, msg: "No Token Provided"});

    // Verify The Token
    jwt.verify(token, secretKey, (err, decode) => {
        if (err) return res.status(403).json({status: false, msg: "Falied To Authorize"});

        req.user = decode;
        next();
    })
}