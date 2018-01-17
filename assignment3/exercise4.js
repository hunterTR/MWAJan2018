var fs = require('fs');
var zlib = require('zlib');
var gzipCreate = zlib.createGzip();
var gzipUnzip = zlib.createGunzip();

//ZIPPING
var readable = fs.createReadStream('./image.jpg');
var compressed = fs.createWriteStream('./zipped.gz');
readable.pipe(gzipCreate).pipe(compressed);

//UNZIP
// var readableZip = fs.createReadStream('./zipped.gz');
// var unzipped = fs.createWriteStream('./unzipped.jpg');
// readableZip.pipe(gzipUnzip).pipe(unzipped);