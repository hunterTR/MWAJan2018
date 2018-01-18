var fs = require('fs');

const readOp = (path) => {
    console.log('reading file');
    var text = fs.readFileSync(path,'utf8');
    console.log(text);
    return text;
}

process.on('message',(path) => {
    console.log('entering child process.');
    var text = readOp(path);
    process.send(text);
});