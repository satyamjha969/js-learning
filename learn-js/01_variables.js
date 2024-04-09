//follow mdn documentation for help !!!  just in case


const accountId = 7081             //const keyword is used to assign values to constant variables
let accountEmail = "satyamjha.com" // we use let to assign

let accountstate;  //if we dont assign value to the 
                   //variable it will be treared as undefined 

var accountPassword ="123456"  // preffer not to use because of scope problem
accountCity = "chandigarh"  // this can used also


// accountId =7083    //this cannot be done in js because cont
                      //value cannot be changed once defined 

console.log(accountId);

accountEmail = "the new one.com"    // let variables values can be changed 
console.log(accountEmail);

accountPassword = "987"             // var variables values can be changed also
console.log(accountPassword);
                                      
accountCity = "kharar"             // direct variables values can be changed also
console.log(accountCity);

// for printing multiple values in console we can use
console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])


