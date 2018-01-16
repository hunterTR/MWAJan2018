
class Musician{
    constructor(name)
    {
        this.name = name;
    }

    play(piece)
    {
        console.log(this.name + " is now playing " + piece);
    }
}


let violinist = new Musician("Asaad");
let pianist = new Musician("Cem");