/* eslint-disable */

var age;

console.log(age);
// console.log(cool);
age = 10;

sayHi();

function sayHi() {
  console.log('Hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// Hoisting -> js rearranges and puts functions at the top of the file on compile

// Wes doesn't prefer calling functions at the top but some people like it
