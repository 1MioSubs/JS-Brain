let obj = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello!");
  },
};

console.log(obj.name); // 'Alice'
obj.greet(); // 'Hello!'

// Добавление свойств
obj.isStudent = true;
console.log(obj.isStudent); // true

// Удаление свойств
delete obj.age;
console.log(obj.age); // undefined
