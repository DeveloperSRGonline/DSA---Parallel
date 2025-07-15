let n = Number(prompt('Enter a number'))

// let i = 0; - initalization/declaration 
// while(condition){ - condition 
//     code - code here
//     i++; - change
// }

// let i = 1;
// while(i<=n){
//     console.log("Hello Shivam!");
//     i++
// }

let sum = 0;
let i =  1;
while(i<=n){
    sum = sum + i;
    i++
}
console.log(sum);


// if we have only condition given not no of iteration