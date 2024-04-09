// scope of variable 


if(true){

let a = 10   //this follow scope 
const b =20  //this follow scope

var c = 30  //this don't scope
d=40  //this don't follow scope

}

// console.log(`the value is ${a}`)
// console.log(`the value is ${b}`)
console.log(`the value is ${c} and ${d}`)  // here is the problem with var and normal assignment they have scope problem
                                            //they still print the value out of scope


//-------------------------------------------------------------------------------------

//nested scope function

//child fumction can access parent function but parent function cant accsess child values .

function bigone(){
    let icecream = 2
    
    function smallone(){

        let icecream2 = 2

        console.log(icecream);
         
    }//console.log(icecream2); //this will not run
    smallone()
}

bigone()

//----------------------------------------------------------------------------------
// another scope example

if(true){
    const username = 'tatakai'
    if(username === 'tatakai'){
        const weeb =' tatakai'
        console.log(username + weeb);

    }
    // console.log(weeb);  //out of scope

}
// console.log(username);   //out of scope

//----------------------------------------------------------------------------------

// function hoisting -----> different ways to declear function in js

// ***example 1 :

// console.log(example()) //we can call this function here also {before initialization}
function example(){
    return 4+5
}
console.log(example())


//***example 2 :


// console.log(value()) // here we can't call this function before initilization
const value2 = function(){
    return 4-5
}

console.log(value2());