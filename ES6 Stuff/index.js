//Template Literals
// helps us concatenate strings
// it's like string concatenation in C#
let word1 = 'Sam';
let word2 = 'Elliott';

const fullName = `${word1} ${word2}`;

console.log(fullName);

//We can also do this with numbers 

let num1 = 5;
let num2 =  9;

console.log(`${num1 + num2} ${word2}`);

//we can even do stuff like this

let example = `${word1} ${word2}`;
document.getElementById('example').innerText = example;

//Let's talk about Destructuring Objects
//right here we have an object
const personalInfo = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Bedford',
    state: 'Ohio'
};
//essentially we're giving a label to properties in the object so we don't have to directly reference the object every time 
const {firstName: fn, lastName: ln} = personalInfo;
console.log(`${fn} ${ln}`); 

//Destructuring Arrays as well
let names = ['Sam', 'Nick', 'Sean']; //we start here
let [fnn, mnn, lnn] = ['Sam', 'Nick', 'Sean']; //let's change it up to this 
console.log(`${fnn} ${lnn}`); 

//Object Literals

function addressMaker(city, state){
    const newAddress = {newCity: city, newState: state};
    console.log(newAddress);
}

addressMaker('Austin', 'Texas'); //this is the old way to do it, but we can do it even better in ES6

function addressMaker2(city, state){
    const newAddress = {city, state};
    console.log(newAddress);
}
addressMaker2('Bedford', 'Ohio'); //this lets us write less code while being similarly descriptive

//let's combine what we have

function finalAddressMaker(address){
    const {city, state} = address;

    const newAddressAgain = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddressAgain.city} ${newAddressAgain.state} ${newAddressAgain.country}`)
}

finalAddressMaker({city: 'Austin', state: 'Texas'});

//for of loop

let incomes = [1,2,3,4];
let total = 0;

for (const income of incomes){
    console.log(income); //like a foreach loop in C#, lets us loop through
    total += income;
}

let thisName = 'Sam Elliot Doing the Most';

for (const char of thisName) {
    console.log(char);
}

//remember, this is used to iterate over iteratables, but we can't change them while in the loop

//Spread Operator

let example1 = [1,2,3,4,5];
let example2 = [...example1]; //tosses everything from example1 to example 2

console.log(example2);

//Rest Operator
//lets us get the arduments from a function when we dunno how many inputs

function add(...nums){
    console.log(nums);
}

add(4,5,6,7,8); //if you don't wanna just toss in an array, you can use that 

//Arrow Operators 

function addAgain(...num){
    let total = num.reduce((x,y) => x + y);
    console.log(total);
}

addAgain(1,2,3,4,5);

//Default Params
//just lets us set some defaults when we write a function, C# has something similar 
function adding(numArray = []){
    let total = 0;
    numArray.forEach((element) => {total += element});

    console.log(total);
}

adding();

//Includes ()

let thatArray = [1,2,3,4,5];

console.log(thatArray.includes(25)); //just to see if an array has something in there

//What is Let and Const?

//Let's look at var

if (false){
    var myExample = 5;
}
console.log(myExample); //this comes back as undefined as the variable can't be seen here 

if (false){
    let myExample = 5;
}
console.log(myExample); //this one is also undefined 

//const is a constant
// these values once set cannot be reset, whereas let can be changed

//Import and Export

//being more modular and stuff 

export const data = [1,2,3]; //lets us export data that we can import somewhere else

//padStart() and padEnd()

//tossing values to the front or back of a string 

let nameEx = 'Sam';

console.log(nameEx.padStart(10, 'a'));
console.log(nameEx.padEnd(10, 'a'));

//Classes 
//Apparently were JUST added to JavaScript????
//y'all were living like this???

export class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Meow!'){
        console.log(sound);
    }

    get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10(){
        return 10;
    }
}

//make a new class that extends the animal class 

export class Hamster extends Animal{
    constructor(type, legs, furColor){
        super(type, legs); //we use the super keyword because it is inheriting from Animal
        this.furColor = furColor;
    }

    makeNoise(sound = "chichichichi"){
        console.log(sound);
    }
}

//Async/Await

const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers(){
    fetch(apiUrl) //promises to get data
    .then((r) => r.json()) //turn the data to a json
    .then((json) => {
        console.log(json[0]) //then print the first thing in said JSON 
    }).catch((error) => {
        console.log('failed');
    });

    getTop100Campers();
}

//so this works, but how would we do it with Async/Await?



async function getTop100Campers2(){
    const response = await fetch(apiUrl); //please wait until this fetch completes
    const json = await response.json(); //won't run until that runs

    console.log(json[0]); //otherwise, the console log wouldn't know as all the code would run at the same time while the json is being sent
}

getTop100Campers2();

//I need to do more HTTPS and API stuff with JS so I can get a good idea of how to use this 

//Sets

//make a unique list

const exSet = new Set([1,1,2,3,4,5,5,6]);

console.log(exSet.size); //it doesn't care about the duplicates, only the unique values

console.log(exSet.has(5));