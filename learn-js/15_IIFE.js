//normal arrow function
const value =()=> (1+1)
console.log(value());

//--------------------------------------------------------------------------------------


//               Immediately Invoke Function Expression (IIFE)

// why IIFE?
// ans : when we dont need variables from global scope to pollute the function scope


//( ()=>{} )();

//**example 1:
(function chai(){
    console.log("hehehehe");
    })();                     // **note: ();is the function call

//**example 2: 
//******* note: example 2 and rest will not run i didn't put ; in end of the () in line 19 .**********


(function chaiaurcode(){     //named IIFE,because chaiaurcode()is the name here
    console.log("hahahaahaaa");
    })();

//**example 3:
//     ( ()=>{} )();

//un-named IIFE function 

( (name) => { console.log(`eren says .. ${name}`);
    } )('tatakai');