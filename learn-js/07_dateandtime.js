//dates 

let mydate = new Date()
console.log(mydate);

console.log(mydate.toString())
console.log(mydate.toDateString())

let thenowdate = new Date(2024,0,15)      //In js months starts from  0  ---> january
console.log(thenowdate.toString());

//time
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(thenowdate.getTime())
console.log(`the current time is ${myTimestamp} in milisec`);


//*note : If we want to make a timer than use this Date.now() as a starting and Date.now()+5 for a ending (5sec in total ) 


//to get the time in sec
console.log(Math.round(Date.now()/1000));