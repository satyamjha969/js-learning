//string decleration

const series ="jujutsu kaisen";

// or

const series2 = new String('Demon Slayer');  //declearing string through objects  , it gives length function and many more

const kills= 999;

console.log(series+kills+" !!");      // not preffered


console.log(`this is awseome series ${series} with ${kills} kills`);        //back-ticks string interpolation
                                                                            //preferred  way

const newvalue = "      ore noava eren yeager";
console.log(newvalue.trim());

const fruitseries = series2.slice(2,5)
console.log(fruitseries);

const dark_knight = "You merly adopted the dark ,I was born with it molded by it"
console.log(dark_knight.replace("merly","merealy-"))
//for replacing a word in string


//to check a word exist or not 

console.log(dark_knight.includes('batman'))   //it gives only true and flase as an output




//split the string based on some - , "" , \
const freshvalue = "in both heaven and hell , i am the honoured one"
console.log(freshvalue.split(',')); 