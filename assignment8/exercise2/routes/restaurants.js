var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var restaurants = req.db.collection("restaurants").find({}).toArray((err,data)=>{
        if (err) console.log(err);
        res.status(200).json(data);
        req.db.close();
    });
});
router.post('/', function (req, res, next) {
    var model = {
        name: req.body.name,
        category: req.body.category,
        coords : [req.body.longitude,req.body.latitude]
    }
    req.db.collection("restaurants").save(model,(err,data)=>{
        if (err) throw err;
        res.status(200).json(data);
    });
});
router.put('/', function (req, res, next) {
    var model = {
        name: req.body.name,
        category: req.body.category,
        coords : [req.body.longitude,req.body.latitude]
    }
    req.db.collection("restaurants").findAndModify({name:req.body.name},[],model,{upsert:true},
        (err,res)=>{
            if (err) throw err;
        res.status(200).json(res);
    });
});
router.delete('/', function (req, res, next){
    req.db.collection("restaurants").remove({name:req.body.name});
    res.status(200).json(req.body);
});

router.get('/nearby',function (req,res,next){
    //MUM coordinates
    var lat = 41.019170;
    var long = -91.967127;
    req.db.collection("restaurants").find({coords: {$near:[long,lat]}}).limit(10).toArray((err,data) => {
        if(err) console.log(err);
        res.status(200).json(data);
    });
    
});


module.exports = router;