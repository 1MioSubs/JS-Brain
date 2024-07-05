let age = -28;

if (age < 18 && age > 0) {
  console.log('you are a minor');
} else if (age >= 18 && age <= 65) {
  console.log('you are an adult');
} else if (age > 65) {
  console.log('you are a senior');
} else {
  console.log('invalid age');
}


let month = 6;
let monthName;

switch (month) {
  case 1:
    monthName = 'январь';
    break;
  case 2:
    monthName = 'февраль';
    break;
  case 3:
    monthName = 'март';
    break;
  case 4:
    monthName = 'апрель';
    break;
  case 5:
    monthName = 'май';
    break;
  case 6:
    monthName = 'июнь';
    break;
  case 7:
    monthName = 'июль';
    break;
  case 8:
    monthName = 'август';
    break;
  case 9:
    monthName = 'сентябрь';
    break;
  case 10:
    monthName = 'октябрь';
    break;
  case 11:
    monthName = 'ноябрь';
    break;
  case 12:
    monthName = 'декабрь';
    break;
  default:
    monthName = 'такого не существует'
    break;
}

console.log(monthName);

for (let i = 1; i<=10; i++){
  console.log('int - ' + i);
}

let count = 10;

while (count > 0) {
  console.log('count is - ' + count);
  count--;
}

let counter = 1;

do {
  console.log('counter is - ' + counter);
  counter++
} while (counter <= 5);