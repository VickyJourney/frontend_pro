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

let obj = function () {
  let i = 0;

  let add = function (j = 0) {
    i += j;
    return this;
  };

  let substract = function (j = 0) {
    i -= j;
    return this;
  };

  let print = function () {
    console.log(i);
  };

  return { add: add, substract: substract, print: print };
};

let x = obj();

x.add(3).substract().add().add().print();

// console.log(x.add(3));
