let employees;

(async () =>{
    employees = await fetch("baltimore_employee.json").then(r => r.json());
    employees.forEach(it => it.hireDate = new Date(it.hireDate))
})()