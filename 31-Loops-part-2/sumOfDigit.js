let n = Number(prompt('Enter a number')) 

let sum = 0;
while(n>0){
    rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n/10)
}
console.log(sum);

// for - iteration known 
// while - iteration not known but condition 