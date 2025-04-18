let result = "";
let i = 20;
while (i <= 30) {
  result += `${i}`;
  i += 0.5;
  if (i <= 30) {
    result += " ";
  }
}
console.log(result);

// let result = "";
// for (let i = 20; i <= 30; i += 0.5) {
//   result += `${i}`;
//   if (i < 30) {
//     result += " ";
//   }
// }
// console.log(result);

// let result = "";
// let i = 20;
// do {
//   i += 0.5;
//   result += `${i}`;
//   if (i < 30) {
//     result += " ";
//   }
// } while (i < 30);
// console.log(result);
