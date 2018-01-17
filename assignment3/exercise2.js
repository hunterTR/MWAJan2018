//Fast Way

var fs = require('fs');   
require('http').createServer(function(req,res){
    var rs = fs.createReadStream('./image.jpg').pipe(res);
}).listen(4000,'127.0.0.1');


//Slower Way

// var fs = require('fs');
// require('http').createServer(function(req,res){
//     var rs = fs.readFile('./image.jpg',(err,data) => {
//         res.end(data);
//     })
// }).listen(4000,'127.0.0.1');