// if(10>2 && 10>7){
//     console.log("codition is true");
// }else{
//     console.log('condition is false');
// }

// find greatest between two number
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter a second number"));
// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${b} is greater than ${a}`);
// }


// Even of odd.
// let n = Number(prompt('Enter a number'))
// if(n%2==0){
//     console.log(`${n} is even number.`);
// }else{
//     console.log(`${n} is odd number.`);
// }


// accept the age and check if it is valid voter or not
// let name = prompt('Enter your name');
// let dob = prompt('Enter your date of birth (YYYY-MM-DD)');
// let birthYear = new Date(dob).getFullYear();
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;

// if (age >= 18) {
//     console.log(`${name}, you are a valid voter.`);
// } else {
//     console.log(`${name}, you are not a valid voter.`);
// }

// let age = Number(prompt('Enter your age'))
// let name = prompt('Enter your name')
// if(age >= 18){
//     console.log(`${name} you are valid voter.`);
// }else{
//     console.log(`${name} you are not valid voter.`);
// }

// greatest number between three number
let a = Number(prompt('Enter first number'))
let b = Number(prompt('Enter second number'))
let c = Number(prompt('Enter third number'))

if(a>b && a>c){
    console.log(`${a} is greater than ${b} and ${c}`);
}else if(b>a && b>c){
    console.log(`${b} is greater than ${a} and ${c}`);
}else {
    console.log(`${c} is greater than ${a} and ${b}`);
}