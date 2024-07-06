// Получение элемента с ID myElement и вывод его содержимого в консоль
let myElement = document.getElementById("myElement");
console.log(myElement.textContent);

// Изменение текста и стиля элемента с классом myClass
let myClassElement = document.querySelector(".myClass");
myClassElement.textContent = "Text has been changed!";
myClassElement.style.color = "red";

// Добавление обработчика события click к кнопке с ID myButton
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  console.log("Button was clicked!");
});
