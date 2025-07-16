let n = Number(prompt('Enter a number'))
let copy = n;
let sq = n * n;
let count = 0;
while(n>0){
    count++;
    n = Math.floor(n/10)
}
let ans = sq%Math.pow(10,count)
if(ans === copy) console.log('Automorphic');
else console.log('Not Automorphic');