export class Person {
    constructor(name){
        this._name = name;
    }

    getInfo(){
        return `Person name: ${this.name}`;
    }

    set name(name){
        if(name.length < 3) throw `Invalid name: ${name}`;
        this._name = name;
    }

    get name(){
        return this._name;
    }
}