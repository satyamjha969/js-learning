let score = null

console.log(score);
console.log(typeof score);

let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber);

// note **conversion from anydatatype to number conversion 
// "33" ----> 33
//"33abc" ---> NaN
// true ---->1



// note **conversion any datatype to boolean conversion 
// 1  ----> true ; 0 ---> false
// "" -----> false ;
// "tatakai"  ----> true;


//operations in js

// string + string = string
let str1 = "Eren";
let str2 = " yeager";
let str3 = str1 + str2 ;
console.log(str3);

let value1 = "11";
let value2 = "1";
console.log(value1+value2);


//string + number = string
console.log("1"+5) //string


console.log(2+2+"2");  //concatination will happens in this because it runs from left to  right
                        //and after that it will become 4+"2" -----> "42"