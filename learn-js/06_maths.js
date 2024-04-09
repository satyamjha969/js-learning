const  score =52 
const balance = new Number(52)

console.log(score);

console.log(balance);
console.log(balance.toString().length); // it will give the length because it is vonverted into string from an number

console.log(balance.toFixed(2)); //it will will precise the number upto here ,{2 demical places} means 52.00

const othernumber =123.8910
console.log(othernumber.toPrecision(3)); //upto three values  from left to right till decimals.

const numbersrep = 10000000
console.log(numbersrep.toLocaleString('en-IN')); 
//converted into number system by toLocalString()
//converted into indian number system by 'en-IN'


//Math library

console.log(Math);
console.log(Math.abs(-4));  //abs will convert it into asolute value means -ve yo +ve

console.log(Math.round(5.9889)); //it will round off the number

console.log(Math.min(1,78,99,0,3)); //find the minimum number
console.log(Math.max(1,78,99,0,3)); // find the max. number

//random function
console.log(Math.random()); //it will give value b/w 0 and 1 (with decimals)
console.log(Math.round((Math.random()*10 )+1));
console.log(Math.floor(Math.random()*(20+1)+(10)));


const min = 10;
const max = 30;
//formula for random in range
console.log(Math.floor(Math.random()*(max-min+1)+(min)));   // +1 so that random gives 0.1 floor will convert it into 0 so, to avoid this we do +1 in it .

