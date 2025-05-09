// const day = prompt("Enter the day of the week (1-7):");
// const numberOfDay = parseInt(day);

// if (isNaN(numberOfDay) || numberOfDay < 1 || numberOfDay > 7) {
//     console.log("Invalid input. Please enter a number between 1 and 7.");
// } else {
//     switch (numberOfDay) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input. Please enter a number between 1 and 7.");
// }
// }

// const number1 = parseInt(prompt("Enter the first number:"));
// const operator = prompt("Enter the operator (+, -, *, /):");
// const number2 = parseInt(prompt("Enter the second number:"));

// let result;

// if (isNaN(number1) || isNaN(number2)) {
//     console.log("Invalid input. Please enter valid numbers.");
// }
// else {
//     switch (operator) {
//         case '+':
//             result = number1 + number2;
//             break;
//         case '-':
//             result = number1 - number2;
//             break;
//         case '*':
//             result = number1 * number2;
//             break;
//         case '/':
//             (number2 !== 0) ? result = number1 / number2 : console.log("Cannot divide by zero.");
//             break;
//         default:
//             console.log("Invalid operator. Please enter one of the following: +, -, *, /.");
//             break;
//     }
//     console.log(`Result: ${result}`);
// }

// let i = 3;
// while (i) {
//     alert(i--);
// }

// let i = 3;
// while (i) {
//     alert(--i);
// }

// let result = '';

// for (let i = 10; i <= 20; i++) {
//     result += i;
//     if (i < 20) {
//         result += ', ';
//     }
// }
//     console.log(result);

// let i = 0;

// do {
//     console.log(i);
//     i++;
// }
//     while (i > 5);

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// for (let key in person) {
//     // console.log(key + ': ' + person[key]);
//     console.log(key, person[key]);
// }

// const numbers = [1, 2, 3, 4, 5];
// for (let num of numbers) {
//     console.log(num);
// }

// const userName = prompt("Enter your name:");

// function showName() {
//   alert(`Hello, ${userName}!`);
// }

// showName();
//----------------------------------------
// let userName = "Stas";

// function showName() {
//   let userName = "Vova";

//   let message = `Hi, ${userName}!`;
//   alert(message);
// }

// showName(); // Hi, Vova!

// alert(userName); // Stas

//----------------------------------------
// function showMessage(from, text) {
//   alert(from + ": " + text);
// }
// showMessage("Ann", "Hello!");
// showMessage("Andy", "Bye!");
//----------------------------------------

// function showMin(num1, num2) {
//   if (num1 > num2) {
//     return num2;
//   }
//   return num1;
// }
// console.log(showMin(5, 10));
//-----------------------------------------

// function calcPow(num, pow) {
//   let result = num;
//   for (let i = 1; i < pow; i++) {
//     result *= num;
//   }
//   return result;
// }

// console.log(calcPow(2, 4));
//-------------------------------------

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]
//-------------------------------------

// const arrowMathPlus = (a, b) => a + b;
// const result = arrowMathPlus(5, 10);
// console.log(result); // 15

//------------------------------------ARRAYS---------------------

// const fruits = ["apple", "orange", "banana"];

// /* for(i = 0; i < fruits.length; i++){
// console.log(fruits[i]);
// } */

// // for (i = fruits.length - 1; i >= 0; i--) {
// //   console.log(fruits[i]);
// // }

// for (fruit of fruits) {
//   console.log(fruit);
// }

/* fruits[0] = 'mandarin' */
/* fruits.push('coco'); //add last element
fruits.pop(); // remove last element
fruits.unshift('mango'); // add 1st element
fruits.shift(); // remove first element
fruits.sort().reverse(); // sort alphabetically or reverse

// let numOfFruits = fruits.length;

/* let index = fruits.indexOf('banana');
/* console.log(index); */

// const pi = 3.14159;
// let radious;
// let circumference;

// document.getElementById("mySubmit").onclick = function () {
//   radious = document.getElementById("myText").value;

//   radious = Number(radious);
//   circumference = 2 * pi * radious;
//   document.getElementById("myH3").textContent = circumference + " cm";
// };

// const letters = ["a", "b", "a", "c", "a", "b"];

// const count = {};

// for (i = 0; i < letters.length; i++) {
//   const letter = letters[i];
//   if (count[letter]) {
//     count[letter] += 1;
//     console.log(count[letter]);
//   } else {
//     count[letter] = 1;
//     console.log(count[letter]);
//   }
// }

// console.log(count);

// function coords(x) {
//   return function (y) {
//     return function (z) {
//       return `coordinates ${8}, ${y}, ${z}`;
//     };
//   };
// }

// const coordinates2 = coords(10)(20);
// const z = 5 - 3;

// console.log(coordinates2(z));

// function process(callback) {
//   const result = 42;
//   callback(result);
// }

// process(function (data) {
//   console.log("Результат обробки: " + data);
// });

// function fetchData(url, callback) {
//   setTimeout(function () {
//     const data = { name: 'John', age: 30 };
//     callback(data);
//   }, 1000);
// }

// fetchData('https://api.example.com/user', function (user) {
//   console.log('Отримані дані користувача: ' + JSON.stringify(user));
// });

// Отримані дані користувача: { "name": "John", "age": 30 }

// const contactBook = {
//   myContacts: [
//     { firstName: "Tonia", tel: "+48758374293", email: "tonia.b@gmail.com" },
//     { firstName: "Katia", tel: "+35158374293", email: "katiushik@gmail.com" },
//     { firstName: "Stas", tel: "+491827529431", email: "s1mpler@gmail.com" },
//     { firstName: "Granny", tel: "+380637583793", email: "babcia123@gmail.com" },
//   ],
//   searchByName(name) {
//     return this.myContacts.filter((contact) =>
//       contact.firstName.toLowerCase().includes(name.toLowerCase())
//     );
//   },
//   addContact(name, tel, email) {
//     this.myContacts.push({ firstName: name, tel, email });
//   },
//   removeContactByName(name) {
//     this.myContacts = this.myContacts.filter(
//       (contact) => contact.firstName.toLowerCase() !== name.toLowerCase()
//     );
//   },
// };

// console.log(contactBook.searchByName("to"));
// contactBook.addContact("Marta", "+487578493", "marta@gmail.com");
// contactBook.removeContactByName("katia");

// console.log(contactBook.myContacts);

const orderManager = {
  orders: [
    {
      id: "1",
      customerName: "Ann",
      items: [
        { productName: "fanta", quantity: 1 },
        { productName: "coke", quantity: 3 },
        { productName: "sprite", quantity: 2 },
      ],
    },
    {
      id: "2",
      customerName: "Max",
      items: [
        { productName: "fanta", quantity: 0 },
        { productName: "coke", quantity: 4 },
        { productName: "sprite", quantity: 2 },
      ],
    },
    {
      id: "3",
      customerName: "Miguel",
      items: [
        { productName: "fanta", quantity: 1 },
        { productName: "coke", quantity: 1 },
        { productName: "water", quantity: 4 },
      ],
    },
  ],

  addOrder(obj) {
    this.orders.push(obj);
  },
  getOrderById(orderId) {
    return this.orders.find((order) => order.id === orderId);
  },
  removeOrderById(id) {
    return (this.orders = this.orders.filter((order) => order.id !== id));
  },
  getTotalItemsByCustomer(name) {
    return this.orders
      .filter((order) =>
        order.customerName.toLowerCase().includes(name.toLowerCase())
      )
      .flatMap((order) => order.items)
      .reduce((sum, item) => (sum += item.quantity), 0);
  },
};

orderManager.addOrder({
  id: "4",
  customerName: "Vicky",
  items: [{ productName: "fanta", quantity: 10 }],
});

console.log(orderManager.orders);
console.log(orderManager.getOrderById("2"));
console.log(orderManager.removeOrderById("2"));
console.log(orderManager.getTotalItemsByCustomer("Vicky"));
