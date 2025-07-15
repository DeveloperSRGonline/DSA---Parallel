let amount = Number(prompt('Enter amount'))
let dis = 0;
if(amount>=0 && amount<=5000){// 0 - 5000 ke bich mein hai toh
    dis = 0;
}else if(amount>5000 && amount<=7000){
    dis = 5;
}else if(amount>7000 && amount<=9000){
    dis = 10;
}else if(amount>9000){
    dis = 20;
}else{
    console.log('invalid input');
}
 console.log(amount - (amount*dis/100));