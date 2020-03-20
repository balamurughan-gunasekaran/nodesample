let router = require('express').Router();
router.get('/',function(req,res){
res.json({
    'status':'Its working',
    'message':'Message received'
})
});
module.exports = router;