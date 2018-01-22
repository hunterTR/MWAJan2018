
var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');



/* GET users listing. */
router.get('/', function(req, res, next) {
    

    req.db.collection('secret').findOne({}, function(err, result) {
        console.log(err)
        console.log(result);

let decrypted = decipher.update(result.message, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
        res.status(200).json(decrypted);
    });

    // db.collection('secret').findOne({},(err,item) => {
    //     console.log(item);
    //     db.close();
    // });
});

router.post('/', function(req, res, next) {
    req.db.collection('secret').save({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"},(err,item) => {
        console.log(err)
        console.log(item);
        // res.json(err)
    });
});

module.exports = router;
