let n = +prompt("Enter a number");
let result = "";

for (let i = 1; i <= 100 && i * i <= n; i++) {
  result += `${i} `;
  if (i * i > n) {
    break;
  }
}
console.log(result);

//-------------------------------------------------
// let i = 1;
// while (Math.pow(i, 2) <= n && i <= 100) {
//   result += `${i} `;
//   i++;
//   if (Math.pow(i, 2) > n) {
//     break;
//   }
// }
// console.log(result);

//-------------------------------------------------
// let i = 1;
// do {
//   result += `${i} `;
//   i++;
//   if (i ** 2 > n) {
//     break;
//   }
// } while (i ** 2 <= n && i <= 100);
// console.log(result);
