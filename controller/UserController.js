UserSchemaModel = require('../model-schema/user-schema-model.js');
// Handle index actions
exports.getUser = function (req, res) {
    UserSchemaModel.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "User retrieved successfully",
            data: users
        });
    });
};
exports.saveUser = function(req,res){
    var user = new UserSchemaModel();
    user.name = req.body.name?req.body.name:"";
    user.email = req.body.email?req.body.email:"";
    user.save(function(err){
        if(!err){
            res.json({"message":"User created successfully","data":user.name});
        }else{
            res.json(err);
        }
    });
}