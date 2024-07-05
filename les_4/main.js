function sum(a, b) {
  return a + b;
}

console.log(sum(5, 9));


function isEven(count) {
  if ((count % 2) == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(6));


const multiply = (a, b) => a * b;

console.log(multiply(5, 5));


function mioFunc() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = mioFunc();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


const person = {
  name: 'Roman',
  greet () {
    console.log(`Hello my name is ${this.name}!`);
  }
};

person.greet();

