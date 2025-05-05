// // const user = {
// //   name: "html",
// //   level: "5",

// //   getString: function () {
// //     return `${this.name} - ${this.level}`;
// //   },
// // };
// // console.log(user.getString());

// function getString() {
//   return `${this.name} - ${this.level}`;
// }

// const user1 = {
//   name: "html",
//   level: "5",

//   //   getString: function () {
//   //     return `${this.name} - ${this.level}`;
//   //   },
//   getStringFunc: getString,
// };

// // getStringFunc = getString;

// const user2 = {
//   name: "css",
//   level: "2",

//   //   getString: function () {
//   //     return `${this.name} - ${this.level}`;
//   //   },
//   getStringFunc: getString,
// };

// console.log(user1.getStringFunc());

// let sum = function (a, b) {
//   return a + b;
// };
// let getSum = (a, b) => (a > b ? a - b : a + b);
// console.log(getSum(5, 70));

// const user = {
//   firstName: "Vicky",
//   lastName: "Journey",
//   hobbies: ["surf", "dance", "plants"],

//   getHobbies: function () {
//     const hobbiesInString = this.hobbies.map(function (item, index) {
//       return `Hobby index: ${index}, hobby name: ${item}`;
//     });
//     return hobbiesInString;
//   },
// };
// console.log(user.getHobbies());

// var data = [
//   { name: "Max", age: "12" },
//   { name: "Andrew", age: "13" },
// ];

// let user3 = {
//   data: [
//     { name: "Sasha", age: "15" },
//     { name: "Ira", age: "17" },
//   ],
//   showData() {
//     console.log(`${this.data[1].name} - ${this.data[1].age}`);
//   },
// };

// let showDataVar = user3.showData;
// // showDataVar.call(user3);
// // console.log(showDataVar.call(user3));

// /*showDataVar();
// let bindShowDataVar = user3.showData.bind(user3);
// bindShowDataVar();*/

// showDataVar.apply(user3);

// function Calculator(num1, num2) {
//   this.num1 = num1;
//   this.num2 = num2;

//   this.getPlus = function () {
//     return this.num1 + this.num2;
//   };

//   this.getMinus = function () {
//     return this.num1 - this.num2;
//   };
// }

// const calc = new Calculator(10, 29);

// console.log(calc.getMinus());
//---------------------------------------

// var small = {
//   a: 1,
//   go: function (b, c, d) {
//     console.log(this.a + b + c + d);
//   },
// };
// var large = {
//   a: 100,
// };
// small.go(2, 3, 4);
// // 1+2+3+4 => 10
// var bindTest = small.go.bind(large, 2);
// console.log(bindTest);
// // function (b,c,d){console.log(this.a+b+c+d);}
// bindTest(3, 4);
// // 100+2+3+4 => 109

/*
1. Значення this зазвичай залежить від контексту виконання.
2. В глобальній області видимості this вказує на глобальний об'єкт (window)
3. Коли використовується ключове слово new, this вказує на об'єкт, що створюється.
4. Ви можемо явно вказати значення this при виконанні функції за допомогою apply, call та bind..
5. Стрілочні функції не змінюють this.*/

// let obj = function () {
//   let i = 0;

//   let add = function (j = 0) {
//     i += j;
//     return this;
//   };

//   let substract = function (j = 0) {
//     i -= j;
//     return this;
//   };

//   let print = function () {
//     console.log(i);
//   };

//   return { add: add, substract: substract, print: print };
// };

// let x = obj();

// x.add(3).substract().add().add().print();

// console.log(x.add(3));

//---------------------------------------

// function UserCalculator(num = +prompt("Please enter a number", "6")) {
//   this.value = num;
//   this.isError = this.value < 0;
//   this.getSumOfNum = function (sumValue = this.value) {
//     if (this.isError) return "Error!";
//     if (sumValue === 0) return 0;

//     return sumValue + this.getSumOfNum(sumValue - 1);
//   };

//   this.getFactorial = function (factorialValue = this.value) {
//     if (this.isError) return "Error!";
//     if (factorialValue === 1 || factorialValue === 0) return 1;

//     return factorialValue * this.getFactorial(factorialValue - 1);
//   };
// }

// const userCalc = new UserCalculator(6);

// console.log("Sum: ", userCalc.getSumOfNum());
// console.log("Factorial: ", userCalc.getFactorial());

//---------------------------------------

// const person = {
//   firstName: "Vicky",
//   lastName: "Journey",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// const car = {
//   brand: "toyota",
//   model: "camry",
//   year: 2022,
//   start: function () {
//     return this.brand + " has motor on";
//   },
//   stop: function () {
//     console.log(
//       `${this.brand} ${this.model} ${this.year} has stopped the motor`
//     );
//   },
// };

// console.log(car.start());
// car.stop();

//------------------------------------------

// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// const anotherCar = new Car("toyota", "camry", 2023);
// const anotherCar1 = new Car("ford", "mustang", 2024);
// const anotherCar2 = new Car("nissan", "juke", 2019);

// console.log(anotherCar2.model);
//-----------------------------------------------

// function BankAccount(accountNumber) {
//   let balance = 0;

//   this.getAccountNumber = function () {
//     return accountNumber;
//   };

//   this.getBalance = function () {
//     return balance;
//   };

//   this.deposit = function (amount) {
//     balance += amount;
//     return this;
//   };

//   this.withdraw = function (amount) {
//     if (balance >= amount) {
//       balance -= amount;
//     } else {
//       console.log("not enough money on the account");
//     }
//     return this;
//   };
// }

// const account1 = new BankAccount("475830305853");

// account1.deposit(500);
// account1.withdraw(200);

// console.log(account1.getBalance());

// account1.deposit(1000).withdraw(400).deposit(2000);

// console.log(account1.getBalance());

//------------------------
//AVR of numbers in array:
// const arr = ["test", null, undefined, "Vika", 7, 2, 6];

// const getSum = arr.reduce(
//   (prevValue, currValue, index) => {
//     if (typeof currValue === "number") {
//       prevValue.sum += currValue;
//       prevValue.length++;
//     }
//     return index === arr.length - 1
//       ? prevValue.sum / prevValue.length
//       : prevValue;
//   },
//   {
//     sum: 0,
//     length: 0,
//   }
// );

// console.log(getSum);

// function sumInput() {
//   const numbers = [];

//   while (true) {
//     const userInput = +prompt("Pls enter number");

//     if (!userInput) {
//       break;
//     }
//     numbers.push(userInput);
//   }
//   return numbers.reduce((acc, curr) => acc + curr);
// }

// console.log(sumInput());

// function Product(name, price) {
//   this.name = name;
//   this.price = price || 0;
// }

// const product1 = new Product("milk");
// const product2 = new Product("bread", 2);

// console.log(product1.name);
//------------------------------------
// const countUp = (num) => {
//   console.log(num);

//   const updatedNum = num + 1;

//   if (updatedNum <= 10) {
//     return countUp(updatedNum);
//   }
// };
// countUp(0);

//-----------------------

// const crust = "Crust";

// function earth() {
//   const mantle = "Mantle";

//   function showMessage() {
//     const core = "Core";
//     console.log(
//       `The earth is made up of the ${crust}, the ${mantle} and the ${core}`
//     );
//   }
//   return showMessage;
// }

// let myFunc = earth();
// myFunc();

//---------------------------
const employees = [
  { name: "Vicky", salary: 500 },
  { name: "Marta", salary: 400 },
  { name: "Max", salary: 300 },
];

const total = employees.reduce(function (sum, emp) {
  return sum + emp.salary;
}, 0);
console.log(total);

const roles = ["admin", "user", "user", "guest", "admin", "user"];

const roleCounts = roles.reduce((acc, role) => {
  acc[role] = (acc[role] || 0) + 1;
  return acc;
}, {});

console.log(roleCounts);

const nested = [[1, 2], [3, 4], [5]];

// const flattedArray = nested.reduce(function (acc, curr) {
//   return acc.concat(curr);
// }, []);

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);

const people = [
  { name: "Max", age: 17 },
  { name: "Anna", age: 21 },
  { name: "Paul", age: 17 },
];

const groupAge = people.reduce(function (acc, person) {
  const age = person.age;
  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});

console.log(groupAge);

const user = { name: "Vicky", age: 29 };
const updUser = { lastName: "Diordiczuk" };

const mergedUser = Object.assign({}, user, updUser);

const { name, age, lastName } = mergedUser;

console.log(name, lastName);
