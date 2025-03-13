// FOREACH METHOD 


// let numbers = [1,2,3,4,5];

// let callback = (number) => {
//     let statement = `${number} x ${number} = ${number * number}`;
//     console.log(statement);
// }

// numbers.forEach(callback);


// MAP METHOD 
// let numbers = [1,2,3,4,5];

// let newNumbers = numbers.map(number => number + 5);
// console.log(newNumbers);





// FILTER METHOD 
// let numbers = [1,2,3,4,5,6,7,8,9];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);


// REDUCE METHOD 

// let userCart = [
//     {
//         id: 1,
//         name: 'Item one',
//         price: 5000
//     },
//     {
//         id: 2,
//         name: 'Item two',
//         price: 10000
//     },
//     {
//         id: 3,
//         name: 'Item three',
//         price: 3000
//     },
// ];

// let total = userCart.reduce((acc, curr) => {
//     return acc + curr.price;
// }, 1000);

// console.log(total);

// acc      curr        return 
// 1000      5000        6000
// 6000      10000       16000
// 16000      3000       19000