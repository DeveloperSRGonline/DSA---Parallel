// sum of even and odd seperately in range of n number
let n = Number(prompt('Enter a number'))

let evenSum = 0;
let oddSum = 0;
for(let i = 1;i<=n;i++){
    if(i%2==0){
        evenSum = evenSum + i;
    }else{
        oddSum = oddSum + i;
    }
}

console.log('Even sum is : ',evenSum);
console.log('Odd sum is : ',oddSum);