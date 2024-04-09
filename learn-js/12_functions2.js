//when we have more than one arguuments to pass inside the function

function func(num1, ...num2){         //spread operator {...} will handle any values after the num1 , here 
    return num2 

}

console.log(func(200,300,5,7));



//----------------------------------------------------------------------------------------------------

//to handle objects inside function

const obj = {
    dialoge:"tatakai",
    by:"Eren yeager"
}

function fun_getvalue(anyobject){
    console.log(`the value inside is ${anyobject.dialoge} and ${anyobject.by} .`)

}

console.log(fun_getvalue(obj))

//---------------------------------------------------------------------------------------------------------

//to handle arrays inside the function
let arr = new Array(1,5,6,8,7,2)

function func2(anyarray){
    console.log(`value inside the array  are ${anyarray[1]}`)  //to get value insdie the 2nd index of the array
}

console.log(func2(arr));