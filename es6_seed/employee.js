import {Person} from "./person.js";
export class Employee extends Person {

    constructor(name, salary, position){
        super(name);
        this.salary = salary;
        this.position = position;
    }

    bonus() {
        return new Promise((resolve, reject) => {
            let bonus = Math.round(Math.random() * 1000)
            setTimeout(() => bonus < 700 ? resolve(bonus):reject("Bonus prea mare!"),
            1000)
        })
    }

    total(){ 
        return new Promise((resolve, reject) => {
            this.bonus().then((bonus) => resolve(bonus+this.salary))
                        .catch((error) => reject(error))   
        })
    }

    getInfo(){
        return `
        ${super.getInfo()} ${this.salary} ${this.position}  `
    }
}