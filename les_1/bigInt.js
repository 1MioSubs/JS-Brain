let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n

let sum = bigInt + 10n; // BigInt + BigInt = BigInt
console.log(sum); // 1234567890123456789012345678901234567900n

// Операции с обычными числами
let num = 20;
let result = bigInt + BigInt(num); // Явное приведение
console.log(result); // 1234567890123456789012345678901234567910n
