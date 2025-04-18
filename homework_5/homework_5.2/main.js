let dollar = 10;
const exchangeRate = 26;

do {
  console.log("$" + dollar + ": ", dollar * exchangeRate + " UAH");
  dollar += 10;
} while (dollar <= 100);

// while (dollar <= 100) {
//   console.log("$" + dollar + ": ", dollar * exchangeRate + " UAH");
//   dollar += 10;
// }

// for (let dollar = 10; dollar <= 100; dollar += 10) {
//   console.log("$" + dollar + ": ", dollar * exchangeRate + " UAH");
// }
