// check if it is a leap year or not 
let year = Number(prompt('Enter a year'))
isLeap = false;

if(year % 4 == 0 && year % 100 != 0){
    console.log('leap year');// 2020 , 2024 ,2028
}else if(year % 400 == 0){
    console.log('leap year');// 1200 , 1600 , 2000
}else{
    console.log('no leap year');
}