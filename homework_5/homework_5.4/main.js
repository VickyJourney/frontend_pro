let n = +prompt("Please enter a number");
let isPrime = true;

if (n <= 1) {
  console.log("This number is neither prime nor complex");
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("This number is a prime number");
  } else {
    console.log("This number is a complex number");
  }
}
