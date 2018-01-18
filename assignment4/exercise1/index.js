const Rx = require('@reactivex/rxjs');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const {fork} = require('child_process');
const subject = new Rx.Subject();


function readFile(e)
{
    var queryObject = querystring.parse(e.req.url.slice(2));
    e.res.writeHead(200,{"Content-Type":"text/plain"});

    const childProcess = fork('readOp.js');
    console.log('read file request ' + queryObject.url);
    if(queryObject.url != undefined)
    {
        childProcess.send(queryObject.url);
        childProcess.on('message',(data) => {
            console.log('retrieving data');
            console.log(data);
            e.res.end(data);
        });
    }
    else
    {
        e.res.end('add query string to read file');
    }
  
}

subject.subscribe(readFile);

http.createServer((req,res) => {
    subject.next({req : req, res : res});
}).listen(4000,'127.0.0.1');