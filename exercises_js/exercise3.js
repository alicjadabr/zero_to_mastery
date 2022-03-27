// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//Solution
let a = "test";
const b = true;
const c = 789;
a = "test2";


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;

//Solution
const { firstName, lastName, age, eyeColor } = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

//Solution
var okObj = {  a,  b,  c};
// okObj
// {a: 'test', b: true, c: 789}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
// default arguments
// default age to 10;
function isValidAge(age) {
    return age;
}

//Solution
const isValidAge = (age=10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

//Solution
let sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//Solution

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}