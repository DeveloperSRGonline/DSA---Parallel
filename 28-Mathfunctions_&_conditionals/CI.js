let p = Number(prompt('Enter a principle : '))
let r = Number(prompt('Enter a rate : '))
let t = Number(prompt('Enter a time : '))

// cp = a - p 
// a = p * (1 + r/100)^t 

let CI = (p * Math.pow(( 1 + r / 100),t)) - p;
console.log(CI);