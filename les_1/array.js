let arr = [1, "two", true, null];

// Доступ к элементам массива
console.log(arr[0]); // 1
console.log(arr[1]); // 'two'

// Добавление элементов
arr.push(5);
console.log(arr); // [1, 'two', true, null, 5]

// Удаление элементов
arr.pop();
console.log(arr); // [1, 'two', true, null]

// Длина массива
console.log(arr.length); // 4

// Итерация по массиву
arr.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
