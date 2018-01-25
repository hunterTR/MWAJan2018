class Car{
    public acceleration:number;
    constructor(public name:string)
    {
        this.acceleration = 0;
    }
    honk(){
        console.log(`${this.name} is saying : toooot!`);
    }
    accelerate(speed:number){
        this.acceleration +=speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);