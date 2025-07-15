// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.9));
// console.log(Math.round(10.9));
// console.log(Math.trunc(10.9));
// console.log(Math.abs(-11));
// console.log(Math.pow(2,4));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(8));
// console.log(Math.max(8,18,4,12));
// console.log(Math.min(8,18,4,12));
// console.log(Math.random());
// let a = 13.3244
// console.log(a.toFixed(2));

let p = Number(prompt('Enter a principle : ')); 
let r = Number(prompt('Enter a rate : ')); 
let t = Number(prompt('Enter a time : ')); 
let CI = (p * Math.pow(( 1 + r / 100),t)) - p; 
console.log(CI); 


// cp = a - p 
// a = p * (1 + r/100)^t 
