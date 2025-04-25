function checkNum() {
  let i = 0;
  let number;
  do {
    number = +prompt("Enter number higher than 100");
    if (number > 100) {
      return number;
    }
    i++;
  } while (i < 10);
  return number;
}

console.log(checkNum());
