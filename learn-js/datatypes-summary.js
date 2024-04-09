//primitive  datatypes       **these are call by value means you dont get the original data you get the value we get the copy .
//(in stack memory)



//7 types : String , Number ,Boolean ,null,undefined ,Symbol(for making unique ),Bigint .

const nameis = "eren yeager"
let username ;
const id =Symbol("123")
const id2 =Symbol("123")            //they both are are different they are unique (symbol)

console.table([id,id2,nameis])








//non primitive datatypes  **reference 
//(stored in heap memory)
//Array ,Functions ,Objects

const scouts = ['eren','mikasa','levi','floch']      //arrays

let myObj={                                          //objects
    'name':"founding tiatan",
    'strength':"armor+war hammer+attack titan"
}

const myfunction = function() {                   //function **note here i am storing the function inside of a variable myfunction 
    console.log("Tatakai !!");
}
