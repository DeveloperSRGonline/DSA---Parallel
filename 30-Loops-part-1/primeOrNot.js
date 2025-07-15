let n = Number(prompt("Enter a number"));

let isPrime = true;

if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) console.log('Number is prime!');
else console.log('Number is not prime!');
//  (let i = 2; i < n/2; i++) // more efficient 
//  (let i = 2; i < Math.floor(sqrt(n)); i++) // most efficient
