function getSum() {
  let value = 0;
  return function (n) {
    value += n;
    return value;
  };
}
const sum = getSum();

console.log(sum(5));
console.log(sum(1));
console.log(sum(3));
