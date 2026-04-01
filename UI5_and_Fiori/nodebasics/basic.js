const employees = [
    { name: "Alice", country: "USA", salary: 5000 },
    { name: "Bob", country: "India", salary: 3000 },
    { name: "Charlie", country: "USA", salary: 5500 },
    { name: "David", country: "Germany", salary: 4000 },
    { name: "Eva", country: "India", salary: 3200 }
];

// Total number of employees
const totalEmployees = employees.length;

// Total salary
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

// Salary by country
// const salaryByCountry = employees.reduce((acc, emp) => {
//     acc[emp.country] = (acc[emp.country] || 0) + emp.salary;
//     return acc;
// }, {});


const salaryByCountry = employees.reduce((acc, emp) => {
    (!acc[emp.country]) ? acc[emp.country] = emp.salary : acc[emp.country] += emp.salary;
    return acc;
}, {});

console.log("Total Employees:", totalEmployees);
console.log("Total Salary:", totalSalary);
console.log("Salary by Country:", salaryByCountry);