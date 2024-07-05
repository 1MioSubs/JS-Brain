const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const dub = numbers.map((num) => num * 2);

console.log(dub);

const filt = numbers.filter((num) => num % 2 == 0);

console.log(filt);


const sum = numbers.reduce((accum, cur) => accum + cur, 0);

console.log(sum); // 15


numbers.forEach((num) => {
  console.log(num * 3);
});