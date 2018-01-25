class BaseObject {
    constructor(public width:number,public height:number){
    }
}

class Rectangle extends BaseObject{

    constructor(){
        super(5,2);
    }

    calcSize()
    {
        return this.width * this.height;
    }
}

var rectangle = new Rectangle();
console.log(rectangle.calcSize());