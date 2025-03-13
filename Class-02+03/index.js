// WHILE LOOP 

// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }


// FOR LOOP 
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }


// CONSTINUE & BREAK 
// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }




// DO WHILE LOOP 
// let i = 11;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10)


// INTRO TO ARRAYS 
// let numbers = [1,2,3, true, 'Faiq'];
// console.log(typeof numbers);
// console.log(Array.isArray(numbers));







// POP, PUSH, SHIFT, UNSHIFT 
// let games = ['Valorant', 'DOTA', 'CSGO'];

// console.log(games);
// let poppedItem = games.pop();
// console.log(games);
// console.log(poppedItem);






// PRIMITIVE TYPES VS REFERENCE TYPES 
// let num1 = 5;
// let num2 = num1;

// num1++;

// console.log(num1);
// console.log(num2);

// let numbers = [1,2,3,4];
// let numbers2 = numbers;

// numbers.push(5);

// console.log(numbers);
// console.log(numbers2);









// HOW TO CLONE AND CONCATINATE AN ARRAY? 




// let numbers = [1,2,3,4];
// let numbers2 = [5,6,7];
// let number3 = numbers.concat(numbers2);

// numbers.push(5);

// console.log(numbers);
// console.log(number3);


// LOOPING THROUGH AN ARRAY 

// let names = ['Faiq', 'Ali', 'Asfand'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }



// FOR OF LOOP 
// let names = ['Faiq', 'Ali', 'Asfand'];

// for(let name of names){
//     console.log(name);
// }


// FOR IN LOOP 
// let names = ['Faiq', 'Ali', 'Asfand'];

// for(let i in names){
//     console.log(names[i]);
// }

// ARRAY DESTRUCTURING 
// let [name1, ...rest] = ['Faiq', 'Ali', 'Asfand'];

// console.log(name1);
// console.log(rest);
// console.log(name3);


// INTRO TO OBJECT LITERALS

// let user = {
//     name: 'Faiq',
//     email: 'faiq@gmail.com',
//     password: '123',
// }

// console.log(user.name);
// user['fav hobbies'] = ['coding', 'games'];
// console.log(user['name']);








// DOT NOTATION AND BRACKET NOTATION


// COMPUTED PROPERTIES 

// let k1 = 'key1';
// let k2 = 'key2';

// let opt1 = 'option 1';
// let opt2 = 'option 2';

// let obj = {
//     [k1]: opt1,
//     [k2]: opt2
// }
// console.log(obj);


// ITERATE OBJECT LITERALS AND OBJECT.KEYS()
// let user = {
//     name: 'Faiq',
//     email: 'faiq@gmail.com',
//     password: '123',
// }

// for(let key in user){
//     console.log(`${key} of this user is ${user[key]}`);
// }

// let keys = Object.keys(user);

// for(let key of keys){
//     console.log(`${key} of this user is ${user[key]}`);
// }



// SPREAD OPERATOR 
// let user = {
//     name: 'Faiq',
//     email: 'faiq@gmail.com',
//     password: '123',
// }

// let user2 = {
//     ...user,
//      newKey: 'this is a new key'
//     };

// user.hobbies = ['asda', 'dad'];

// console.log(user);
// console.log(user2);


// OBJECT DESTRUCTURING 
// let user = {
//     name: 'Faiq',
//     email: 'faiq@gmail.com',
//     password: '123',
// }

// let {name: username, password} = user;
// console.log(username);
// console.log(password);


// ARRAY OF OBJECTS
// const data = [
//     {
//         id: 1,
//         name: 'Faiq'
//     },
//     {
//         id: 2,
//         name: 'Ali'
//     },
//     {
//         id: 3,
//         name: 'Asfand'
//     },
// ]

// for(let user of data){
//     console.log(`At ID ${user.id}, username is ${user.name}`);
// }




// NESTED DESTRUCTURING 

// const data = [
//     {
//         id: 1,
//         name: 'Faiq'
//     },
//     {
//         id: 2,
//         name: 'Ali'
//     },
//     {
//         id: 3,
//         name: 'Asfand'
//     },
// ];

// let [{name: username1}, {name: username2}, {name: username3}] = data;

// console.log(username1);
// console.log(username2);
// console.log(username3);

