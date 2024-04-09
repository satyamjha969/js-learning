// Objects can be decleared in severals ways ,here are two of them ----->  By literal and constructor

// 1st way singleton object (by constructors method )
//        Object.create

//2nd way object by literals 

const Jsuser = {
  name: "eren yeager",                                   //keys and Values pairs
  power: ["Attack-titan , War-hammer and armor titan"],
  "kills":"90% of humanity",
  "status": "dead"
}

console.log(Jsuser.name);
console.log(Jsuser.kills);
console.log(Jsuser['status']);    //another way to access the data inside the Object.
console.log(Jsuser.power);
console.log(Jsuser)


//function inside the objects 
Jsuser.funcone = function(){
  console.log(`hello this fist function and i am just saying that ore no nawa ${this.name}`);
}

Jsuser.funcone2 = function(){
  console.log(`this is second function and my powers are ${this.power}`)
}

console.log(Jsuser.funcone());
console.log(Jsuser.funcone2());