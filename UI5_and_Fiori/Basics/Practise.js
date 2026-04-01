// const myPractiseJson = {
//     status: "Success",
//     employee: [
//         {id: 1, name: "Rajib Das", role: ["Ui5 Dev"]},
//         {id: 2, name: "Pinak Das", role: ["Ui5 Dev", "CAPM"]},
//         {id: 3, name: "Pinak Das", role: ["Ui5 Dev", "CAPM", "ABAP"]}
//     ]
// }



// console.log(myPractiseJson.status);
// console.log(myPractiseJson["status"]);
// console.log(myPractiseJson.employee[2].role[2]);
// console.log(myPractiseJson["employee"][2]["role"][2]);


// const apiResponse = {
//   status: "SUCCESS",
//   data: {
//     users: [
//       {
//         id: 1,
//         name: "Raj",
//         roles: ["ADMIN", "DEVELOPER"],
//         address: {
//           city: "Kolkata",
//           country: "India"
//         }
//       },
//       {
//         id: 14,
//         name: "Raj",
//         roles: ["ADMIN", "DEVELOPER"],
//         address: {
//           city: "Kolkata",
//           country: "India"
//         }
//       }
//     ]
//   },
//   error: null
// };


// console.log(apiResponse.data.users[0].roles[1]);


// const myPractise = {
//     status: "Success",
//     employee: [
//         {id: 1, name: "Rajib Das", role: ["Ui5 Dev"]},
//         {id: 2, name: "Pinak Das", role: ["Ui5 Dev", "CAPM"]},
//         {id: 3, name: "Pinak Das", role: ["Ui5 Dev", "CAPM", "ABAP"]}
//     ]
// }

// //Converting JS Object to JSON
// console.log(JSON.stringify(myPractise));



// const JSONFormat = '{"status":"Success","employee":[{"id":1,"name":"Rajib Das","role":["Ui5 Dev"]},{"id":2,"name":"Pinak Das","role":["Ui5 Dev","CAPM"]},{"id":3,"name":"Pinak Das","role":["Ui5 Dev","CAPM","ABAP"]}]}'

// console.log(JSON.parse(JSONFormat));

// let newJsonObj = {
//       "name": "Rohit",
//       "age": 20,
//       "isSmoler": false,
//       "fatherName": "Monoj",
//       "subStr": {
//                   "Bilas": "yes"
//        }
//  }

//  console.log(newJsonObj);
 
 







// var user = {
//     name: "Rajib",
//     age: 20,
//     status: "Success"
// }

// var age = user.age;
// var name = user.name
// var status = user.status
// // above is old way

// // Destruction way 
// const { age, name, status } = user

// const user = {
//   name: "Raj",
//   age: 26
// };

// // Renaming variable differnt then key
// const { name: userName, age: userAge } = user;

// console.log(userName); // Raj

// const user = {
//   name: "Raj"
// };

// const { name, city = "Kolkata" } = user;

// console.log(name); // Raj
// console.log(city); // Kolkata



// const employee = {
//   id: 101,
//   profile: {
//     name: "Raj",
//     skills: "UI5"
//   }
// };

// const {
//     id,
//     profile: {name, skills}
// } = employee




// const data = {
//   status: "Success",
//   employee: [
//     { id: 1, name: "Rajib" },
//     { id: 2, name: "Pinak" }
//   ]
// };

// const {
//     employee: [
//         {id, name: firstName},
//         {id: secondId, name: secondUser}
//     ]
// } = data

// const user = {
//     id: 25,
//     name: "Rahu;"
// }

// function myAddition ({id, name}) {
//     return `${id} of user having name is ${name}`
// }

// console.log(myAddition(user));

// const arr = [1,2,3,4,5];

// const [a, , b] = arr;

// console.log(a,b);



// const arr = [1,2,3,4,5];

// function myAddition([a,b,c,d]) {
//     return `${a} is ${d}`
// }

// console.log(myAddition(arr));




// number will be storing [10,20,30]
// function myAddition(...number){
//     let sum = 0;
//     number.forEach((eachNum) => {
//         sum += eachNum;
//     })
//     return sum;
// }

// // IMP > here sum is the variable which is declared at the top and where we make changes to it will make changes to same location so all sum is pointing to same. Note no new let sum which will be then different.
// console.log(myAddition(10,20,30));


// const arr = [10,20,30,40,50];

// const [first, second, ...rest] = arr;

// console.log(rest);





// const user = {
//     userName: "Rohit",
//     age: 20,
//     isSmoker: false,
//     remarks: "Its Good"
// };

// const {age, ...rest} = user;

// console.log(rest);


// const arr = [1,2,3,4];

// function myNums(a, b, c, d) {
//     return `${a} is ${b} and ${c} is ${d}`
// }

// console.log(myNums(...arr));

//...arr = 1,2,3,4 (Not an array)
// syntx >> ...variable(array or Object)


// const arr1 = ["ram", "jam"];
// const arr2 = ["Help", "mello"];

// const combo = [...arr1, ...arr2];
// console.log(combo);

// const obj1 = {
//     id: 10,
//     age: 20,
//     userName: "Raghav"
// };
// const obj2 = {
//     isSmoker: false
// }
// const comboObj = {
//     ...obj1, ...obj2
// }

// console.log(comboObj);




// const arr = [1,2,3,4,5];
// const cloneArr = [...arr];
// console.log(cloneArr);


// const object = {
//     first: "Raj",
//     last: "Mohan"
// };

// function summer(...args) {
//     // here ...args is Rest operator which will take series of elements/object in a array 
//     console.log(args);
//     console.log(args[0]);
// }
// summer(object);






// const arr = ["Rohit", "Deepraj"];

// const object = {
//     userName: "Rohit",
//     city: "Silchar",
//     getInfo: function () {
//         console.log(`${this.userName} stay at ${this.city}`);
//     }
// }



// Constructor
// function Person(userName) {
//     this.userName = userName;
// }

// Person.prototype.getInfo = function () {
//     console.log(`${this.userName} is from Silchar`);
    
// }

// const raj = new Person("Deepraj");
// raj.getInfo();


// const employee = {
//   id: 101,
//   personal: {
//     name: "Raj",
//     city: "Bangalore"
//   }
// };


// function recur(employee, parentKey) {
//     for(const [k, v] of Object.entries(employee)){
//         let fullKey = parentKey ? `${parentKey}.${k}` : k;
//         if(typeof(v) !== 'object'){
//             console.log(fullKey, v);
//         }
//         else{
//             recur(v, fullKey);
//         }
//     }
// }

// recur(employee, '');

// const shallowCopy = { ...original };

// shallowCopy.address.city = 'Mi'
// shallowCopy.name = 'Rohit'

// console.log(original);
// console.log(shallowCopy);



// const original = {
//   name: "Raj",
//   address: {
//     city: "Kolkata"
//   }
// };

// // Deep copy
// const deepCopy = JSON.parse(JSON.stringify(original));

// console.log(deepCopy);




// map, filter and reduce

/**
 * Q1 Total Salary by Department
 * 
 * You are given an array of employee objects.
const employees = [
  { name: "Amit", dept: "IT", salary: 50000 },
  { name: "Neha", dept: "HR", salary: 40000 },
  { name: "Rahul", dept: "IT", salary: 60000 },
  { name: "Pooja", dept: "HR", salary: 45000 }
];
Task:
Group employees by dept
Calculate total salary per department

Output:
{ IT: 110000, HR: 85000 }
 * 
 */
 

// const employees = [
//   { name: "Amit", dept: "IT", salary: 50000 },
//   { name: "Neha", dept: "HR", salary: 40000 },
//   { name: "Rahul", dept: "IT", salary: 60000 },
//   { name: "Pooja", dept: "HR", salary: 45000 }
// ];

// const output = employees.reduce(function (acc, curr) {
//     if(acc[curr['dept']]){
//         acc[curr['dept']] += curr['salary']
//     }
//     else{
//         acc[curr['dept']] = curr['salary'];
//     }
//     return acc;
// }, {})

// console.log(output);


// const students = [
//   { name: "Raj", marks: 78 },
//   { name: "Ankit", marks: 35 },
//   { name: "Priya", marks: 82 },
//   { name: "Rohit", marks: 40 }
// ];

// //Consider only students with marks ≥ 40
// //Calculate average marks

// let count = 0;
// const output = students.filter((student) => student.marks >= 40).reduce(function(acc, curr){
//     count += 1;
//     acc += curr['marks']
//     return acc;
// }, 0)


// console.log(output/count);


const users = [
  { username: "u1", roles: ["ADMIN", null, 123, "ADMIN"] },
  { username: "u2", roles: ["USER"] }
];

// /**
//  * Create an object showing how many users belong to each role

// Output:

// { ADMIN: 2, USER: 2 }
//  */
const userWithRole = users.reduce((acc, { roles }) => {
    roles.forEach(r => {
        if(r && isNaN(r)){
            // Using modern syntax -- if else only
            /**
             * if(acc[r]){
             *  acc[r] += 1
             * }
             * else{
             *  acc[r] = 1
             * }
             */
            acc[r] = (acc[r] || 0) + 1;
        }
    })
    return acc;
}, {})


console.log(userWithRole);


// const words = ["sap", "ui5", "sap", "js", "ui5", "sap"];

// const occuraceOfWords = words.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {})


// console.log(occuraceOfWords);


// Question 7: Flatten and Sum Nested Scores

// const teams = [
//   { team: "A", scores: [10, 20, 30] },
//   { team: "B", scores: [15, 25] }
// ];

// const arrayOfTotalUsers = teams.reduce((acc, curr) => {
//     //using concat method
//     acc = acc.concat(curr['scores']);
//     return acc;
// }, [])

// console.log(arrayOfTotalUsers);



// Question 10: Shopping Cart Summary

// const cart = [
//   { item: "Pen", price: 10, qty: 3 },
//   { item: "Book", price: 100, qty: 2 },
//   { item: "Bag", price: 500, qty: 1 }
// ];


// let emptyArr = [];

// const cartItems = cart.reduce((acc, curr) => {
//     acc['items'] = emptyArr;
//     emptyArr.push({item: curr['item'], total: curr['price']*curr['qty']});
//     acc['grandTotal'] = (acc['grandTotal'] || 0) + curr['price']*curr['qty'];
//     return acc;
// }, {})

// console.log(cartItems);

 // split and join
//  let str = 'My name is Khan'

//  console.log(str.split(' '));
 

// const myArr = ['My', 'name', 'is', 'Khan'];

// console.log(myArr.join(' '));










