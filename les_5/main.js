function doSomething(callback) {
  console.log("Start doing something...");
  setTimeout(function () {
    console.log("Finished doing something!");
    callback();
  }, 2000); // Имитация долгой операции в 2 секунды
}

function afterCallback() {
  console.log("Callback executed.");
}

doSomething(afterCallback);



// Создание обещания, которое разрешается через 2 секунды
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000); // имитируем задержку в 2 секунды
});

// Использование обещания с методами then и catch
promise.then((message) => {
  console.log(message); // Promise resolved
}).catch((error) => {
  console.log(error); // будет вызван в случае отклонения (reject) обещания
});




// Функция, возвращающая обещание с задержкой
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1500); // имитируем задержку в 1.5 секунды
  });
}

// Асинхронная функция, использующая await для ожидания разрешения обещания
async function getData() {
  const data = await fetchData();
  console.log(data); // Data received
}

// Вызов асинхронной функции
getData();
