
const os = require('os');
const Rx = require('@reactivex/rxjs');

function checkSystem(){
    console.log("Checking your system....");
    //console.log(os.totalmem());
    Rx.Observable.create(subscriber => {
        //console.log(os.totalmem());
        if(os.totalmem() >= 4e+9)
        {
            subscriber.next('Ram Passed');
        }
        else
        {
            subscriber.next('This app needs at least 4 gb ram');
        }
        if(os.cpus().length >= 2)
        {
            subscriber.next('CPU Passed');
        }
        else
        {
            subscriber.next('Processors is not supported');
        }
        subscriber.complete();
    }).subscribe((res)=>{
        console.log(res);
    },(error) => {

    },(complete)=>{
        console.log("System is checked successfully.");
    });
    
}



checkSystem();