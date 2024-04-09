//to declear the function 

function fname(num1,num2){
    if(!num1){
        console.log(`plese enter a number :`)
    }
    else if(num1<0){
          console.log(`enter a valid first number  ${num1} > 0 :`)
    }else{
    console.log(`heheehee and the subtraction of ${num1} and ${num2} is :`);
    return num1 - num2} 
}

// let value = fname(5,10)
// console.log(value);

console.log(fname(1,10))