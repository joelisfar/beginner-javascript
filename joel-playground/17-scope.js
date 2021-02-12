// Functions are declared globally, as is var
// const and let are not declared in the global scope

// const first = 'Joel';
// let second = 'Farris'
// var age = 100;

// function sayHi() {
//   console.log('hi!');
// }

// const age = 100;

// function go() {
//   const hair = 'blonde';

//   const myAge = 200;

//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();

// Function scope -> variables in the function are not available
// outside of the function. Unless you return it and put it into its
// own variable when the function is run.
//
// Curly brackets are like fences.
//
// Variables called *in* a function can go up a level to look in that scope
//
// Overwriting variables in a lower scope is not recommended as it overshadows
// the variable in the upper scope.

/* eslint-disable */

// function isCool(name) {
//   let cool;
//   if (name === 'Joel') {
//     cool = true;
//   }
  
//   // console.log(cool);
//   return cool;
// }

// for(const i = 0; i < 10; i++) {
//   console.log(i);
// }

const dog = 'snickers';
window.IAMAGlobal = 'Joel';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

go();

// "lexical scoping" 
// Scoped variable lookup happens based on where a function
// is defined, not where it is run.
//
// When a function *takes in an argument* it makes local variables
// inside of the function based on the name of the parameter
//
// Best practice: avoid global variables.

function saHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

// yell();

// Functions, just like variables, are scoped to the parent function

// Generally we define functions at the top level, not  inside of other functions