var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
const Rx = require('@reactivex/rxjs');

/* GET users listing. */
router.get('/', async function(req, res, next) {
//PROMISE
  // fetch('http://jsonplaceholder.typicode.com/users/')
  // .then(function(res) {
  //     return res.json();
  // }).then(function(json) {
  //   res.render('users', {users: json});
  // });

  //ASYNC AWAIT
  // let jsonData = await getUsersAsync();
  // res.render('users', {users: jsonData});

  //OBservable
   let result = Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'));
   result.subscribe(x => {
    let json = Rx.Observable.fromPromise(x.json()); 
    json.subscribe(json => { res.render('users', {users: json}); });
  }, e => console.error(e));


  //res.send('respond with a resource');
});


async function getUsersAsync(){
  try{
    let res = await fetch('http://jsonplaceholder.typicode.com/users/');
    let json = await res.json();
    return json;
  }catch(error){
    console.log("error occured");
  }
}
module.exports = router;
