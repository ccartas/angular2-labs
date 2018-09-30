import { Employee } from "./employee.js";

let _employees = [];

export class Employees {
    constructor(){

    }
    
    static add(employee){
        if(!(employee instanceof Employee))
            throw "Not instance of employee!";
        _employees.push(employee)
        
        
    }
    
    static list(){
        return [..._employees];
    }
    static averageSalary(){
        return _employees.map(emp => emp.salary)
                    .reduce((a,b) => a+b) / _employees.length
    }
    static remove(employee){
        const index = _employees.findIndex(e => e === employee)
        _employees.splice(index, 1);
    }

    static *names(){
        yield* _employees.map((emp) =>emp.name)
    }
}