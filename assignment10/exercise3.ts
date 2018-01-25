class Person{
    private _firstName:string;

    get firstName(){
        return this._firstName;
    }

    set firstName(firstname:string){
        this._firstName = firstname;
    }

}

let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);