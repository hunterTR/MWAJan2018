const Rx = require('@reactivex/rxjs');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const subject = new Rx.Subject();


function readFile(e)
{
    console.log(querystring.parse(e.req.url.slice(2)));
    e.res.writeHead(200,{"Content-Type":"text/plain"});
    e.res.end("hello world$");
    
}

subject.subscribe(readFile);
http.createServer((req,res) => {
    subject.next({req : req, res : res});
}).listen(4000,'127.0.0.1');