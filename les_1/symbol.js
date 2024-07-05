let sym1 = Symbol("description");
let sym2 = Symbol("description");

console.log(sym1 === sym2); // false

let obj = {};
let sym = Symbol("key");
obj[sym] = "value";

console.log(obj[sym]); // 'value'
console.log(obj); // { [Symbol(key)]: 'value' }
