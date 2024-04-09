//to decleare an array we have two ways.

let mysecondarray = new Array(1,4,8,'Tatakai',10) //this has many builtin function that we can use .
let myArray = ['eren' ,99,45,'yeagerist'];


console.log(myArray);
console.log(mysecondarray);

//to add something in the array use use push(element)
mysecondarray.push(0);
console.log(mysecondarray);

//to remove the element pop()
mysecondarray.pop()

console.log(mysecondarray)

//unshift
mysecondarray.unshift(2)  //it will add the value in the begining of the array

//unshift
mysecondarray.unshift()  //it will remove the first element


//includes

let newbiearray = new Array(1,2,3,4,5,'uchihas')
console.log(newbiearray.includes(100));   //check for values in array and return true or false

//indexof() find the index of element
console.log(newbiearray.indexOf(5));

//join() it will convert the array into string 
const exampleArray = newbiearray.join();
console.log(exampleArray);
console.log(typeof(exampleArray)); 

//slice and spice **note : slice(start,end) will make the copy of the original not manipulate the original.{and run from start to end-1}
                            //whereas splice(start,end) will remove the the element from the original array by manipulating and stores the deletd values.{and runs from start to end}  

const newbiearray2 = new Array(1,2,3,4,5);
const marray = newbiearray2.slice(1,3)

console.log(marray);
console.log("b",newbiearray2);



console.log("original",newbiearray2);

const marray2= newbiearray2.splice(1,3)
console.log("original",newbiearray2); //to see thats deleted from the original
console.log("c",marray2);       //deleted are stored here


//push() Vs concat()
let heros = new Array('Batman','ironman','spiderman')


let heros2= new Array('moonknigtht','daredevil','ghostrider','Deadpool')
let ans = heros.concat(heros2); 
console.log(ans)

heros.push(heros2); //it will put the 2nd array inside a 1st as a subarray
console.log(heros);

// ...{spread operator}    **note it work exactly same as concat() but easy to write and use.
let exarray = new Array(0,1,2,3,4)
let exarray2 = new Array(5,6,7,8,9,10)
let ansewer = [...exarray,...exarray2] //it will join the two or more arrays just write ... in the begining
console.log(ansewer);


//flat()   **note:it will merze the sub arrays together 
let example =[1,2,[2,5],3,[3,6,[4,5]]];
let anotherexample = example.flat(Infinity);  //infintiy here means if you dont know how many sub-layers are there than use infinity else the layer number .
console.log(anotherexample);

//conversion into array **note : it will convert the string into characters
console.log(Array.from('word'));


let valuesss=122;      //conversion from multiple values to arrray
let valuesss2='name'
console.log(Array.of(valuesss,valuesss2));
