const arr = [
  1,
  "Vicky",
  true,
  14,
  "9",
  3,
  null,
  "hi Stas",
  2,
  false,
  "32",
  undefined,
];

function calcAvg(arr) {
  let sum = 0;
  let count = 0;
  arr.forEach((item) => {
    if (typeof item === "number") {
      sum += item;
      count++;
    }
  });
  return sum / count;
}

console.log(calcAvg(arr));
