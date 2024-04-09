//use of this keyword



const user ={
    username:'hitesh',
    price:99,
    welcomemessage: function(){
        console.log(`welcome ,${this.username}`); //this keyword reffers current context .
        console.log(this);  //here (this) will show all the values used inside the user in user object context


    }
}

user.welcomemessage()
user.username ='bankai'
user.welcomemessage();

console.log(this); //and this will show {} empty because of global node environment . 

//------------------------------------------------------------------------------------------

//add two function by arrow function 
   //()=>{}
const exaddtwo = (num1,num2)=>{  
    
                                    //when we use {} you have to use return keyword . 
    return  num1 + num2
} 

console.log(exaddtwo(5,1));

//we can also make function like this

const ex2addtwo = (num1,num2) => (num1 + num2)   //no need to write return keyword just put the result inside ( )
                                                // mostly used in react.
console.log(ex2addtwo(9,1));


//to return object in arrow function 
const num = ()=> ({username:'tatakai'})
console.log(num());
