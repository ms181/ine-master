const mongoose = require('mongoose');

module.exports = function connectToMongo(){
    mongoose.connect(process.env.MONGO_URI)
        .then( () => {
            console.log("Connection To Db Sucess");
        })
        .catch( (e) => {
            console.log('DB Connection err:',e);
        })
}