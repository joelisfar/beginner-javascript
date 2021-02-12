// Notes:
// Functions are defined and called
// Creating a function is making a function definition
// Later on when you want to use it you *call* it or run it

// this is a function block, defining a function
function calculateBill(billAmount, taxRate = 0.0825, tipRate = 0.15) {
  console.log(billAmount, taxRate);
  // this is the function body
  // console.log('Running Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;

  return total;
}

// this is a function call
// calculateBill();

// This doesn't work because block scoping
// -> variable isn't defined outside of the function
// console.log(total);

// console.log(`Your total is: $${myTotal}.`);

const joelTotal = 100;
const joelTaxRate = 0.0825;

// const myTotal = calculateBill(joelTotal, joelTaxRate);
// console.log(myTotal);

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('Joel');
// console.log(greeting);

// const jillianTotal = 100;
// const myTotal3 = calculateBill(jillianTotal + 100, 0.0825);
// console.log(myTotal3);

function doctorize(name = 'Silly Goose') {
  return `Dr. ${name}`;
}

// function yell(name) {
//   return `HEY ${name.toUpperCase()}!`;
// }

// const result = yell(doctorize('Joel'));

const myBill4 = calculateBill(100, undefined, 0.28);
