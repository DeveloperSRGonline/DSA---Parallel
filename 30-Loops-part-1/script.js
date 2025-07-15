let n = Number(prompt("Enter a number"));

let isPrime = isPrimeFun(n);
if (isPrime) console.log("Number is prime");
else console.log("Number is not prime");

function isPrimeFun(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % 1 == 0) return false;
  }
  return false;
}
