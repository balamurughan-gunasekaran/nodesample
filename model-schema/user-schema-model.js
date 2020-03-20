var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
var userModel = module.exports = mongoose.model('userModel',userSchema);
module.exports.get = function (callback, limit) {
    userModel.find(callback).limit(limit);
}