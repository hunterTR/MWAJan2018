var EventEmitter = require("events");
class Clock extends EventEmitter {
    constructor()
    {
        super();
        setInterval(() => {
            this.emit("tick");
        },1000)
    }
}

var clock = new Clock();
clock.on("tick",() => {
    console.log("Woohooo");
});