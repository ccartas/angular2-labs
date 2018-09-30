import { Employee } from "./employee.js";
import { Employees } from "./employees.js";


let emp1 = new Employee("Gica", 20, "CEO")
let emp2 = new Employee("Gigel", 30, "CTO")

Employees.add(emp1)
Employees.add(emp2)
//Employees.remove(emp1);
let body = document.body;
let list = document.createElement('ul')
let arr = Employees.list();
arr.forEach((element) => {
    let li = document.createElement('li')
    li.innerHTML = element.name
    list.appendChild(li);
})
body.appendChild(list);

console.log(Employees.averageSalary())
let paragraph = document.createElement('p')
paragraph.innerHTML = Employees.averageSalary()
body.appendChild(paragraph);

emp1.bonus().then((val) => {
    console.log(`Bonusul este ${val}`)
})

emp1.total().then((total) => {
    console.log(`Salariul total este: ${total}`)
}).catch((error) => console.log(error))

let arr1 = [...Employees.names()]
for(let elem of arr1){
    console.log(elem)
}

async function printBonus(){
    for(let employee of Employees.list()){
        let bonus = await employee.bonus()
        console.log(bonus);
    }
}

printBonus()