let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('./routes/routes.js');
let userController = require('./controller/UserController.js');
let app = express();
var port = '8080'
let dburl = "mongodb://admin:admin1234@172.30.3.134:27017/nodesample";

//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
    console.log("inside openshift");
    dburl = process.env.OPENSHIFT_MONGODB_DB_URL + "nodesample";
  }
  console.log(dburl);
var collectionName = "testsample";
var collection;
app.use(bodyParser.urlencoded({
    extended :true
}));
app.use(bodyParser.json());
mongoose.connect(dburl,{useNewUrlParser:true, useUnifiedTopology:true});
var db = mongoose.connection;
if(db){
    console.log("Db connected successfully");
}else{
    console.log("Error in Db connection");
}
app.get('/',(req,res)=>res.send("Hello world with express"));
app.use('/api',router);
router.route('/user')
    .get(userController.getUser);
router.route('/saveuser').post(userController.saveUser);
app.listen(port,function(){
    console.log("Running port on "+port);
});

 function databaseCreation(){
     console.log("inside databasecreation");
    mongoClient.connect(mongo_url,{useUnifiedTopology: true},function(err,client){
        if(err){
            console.log(err.message);
            throw err;
        }else{
            console.log("Client connected successfully");
          insertCollection(client);  
        }
        
    });
}
function insertCollection(clientConnection){
        const db = clientConnection.db('nodesample');
        const collection = db.collection('testsample');
        collection.insertOne({name:'Bala'},(err,result)=>{
            // console.log(result);
        }); 
    
}
module.exports = router;
