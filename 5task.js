/*
Task 5: getEmployeeDept(employee) — Nested Destructuring  
Given { name, job: { title, department } }, return { title, 
department } using nested destructuring. 
Input:   
{ name: "Nadia", job: { title: "PM", department: "Product" } } 
Output:  
{ title: "PM", department: "Product" } 
*/

// const getEmployeeDept = (employee) =>{
//     return employee.job;
// }
const getEmployeeDept = ({ job: { title, department } }) => {
    return { title, department };
};
emp1 = {
    name: "Junayed Hasan",
    job:{
        title: "Buisness Development Executive",
        department: "Galaxy"
    }
}
emp2 = {
    name: "Nadia",
    job:{title: "PM",
        department: "Product"
    }
}
console.log(getEmployeeDept(emp1));
console.log(getEmployeeDept(emp2));