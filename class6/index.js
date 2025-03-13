// METHODS
// let user = {
//     name: "Faiq",
//     age: 20,
//     info: function(){
//         console.log("This is faiq");
//     }
// }

// THIS

// function info(){
//     console.log(`This is ${this.name}`);
// }

// let user = {
//     name: "Faiq",
//     age: 20,
//     info: info
// }

// user.info()

// WINDOW

// function info(val){

// }
// console.log(window.document);

// THIS FOR ARROW FUNCTION
// let user = {
//     name: "Faiq",
//     age: 20,
//     info: () => {
//         console.log(this);
//     }
// }

// user.info();

// Write javascript code to create users and store their information
// Each user must have an auto generated introduction with their basic information at the time of creation
// Keep the code optimized

// TRY 1 X

// let user = {
//     name: "Faiq",
//     email: "faiq@gmail.com",
//     age: 20,
//     is18Plus: function(){
//         return this.age >= 18;
//     },
//     intro: function(){
//         return `Hello, My name is ${this.name}.`
//     }
// }
// let user1 = {
//     name: "Sumbal",
//     email: "sumbal@gmail.com",
//     age: 20,
//     is18Plus: function(){
//         return this.age >= 18;
//     },
// intro: function(){
//     return `Hello, My name is ${this.name}.`
// }
// }

// let userIntro = user1.intro();
// console.log(userIntro);

// TRY 2 X

// function createUser(name, email, age) {
//   let user = {};
//   user.name = name;
//   user.email = email;
//   user.age = age;
//   user.is18Plus = function () {
//     return this.age >= 18;
//   };
//   user.intro = function () {
//     return `Hello, My name is ${this.name}.`;
//   };
//   return user;
// }

// let user1 = createUser("Faiq", "faiq@gmail.com", 20);
// let user2 = createUser("Ali", "ali@gmail.com", 20);
// let user3 = createUser("sumbal", "sumbal@gmail.com", 20);
// console.log(user1);
// console.log(user2.intro());
// console.log(user3);



// TRY 3 PASS
// let methods = {
//     is18Plus: function(){
//         return this.age >= 18;
//     },
//     intro: function(){
//         return `Hello, My name is ${this.name}.`;
//     },
//     getContact: function(){
//         return this.email;
//     }
// }

// function createUser(name, email, age) {
//   let user = Object.create(methods);
//   user.name = name;
//   user.email = email;
//   user.age = age;
//   return user;
// }

// let user1 = createUser("Faiq", "faiq@gmail.com", 20);
// let user2 = createUser("Ali", "ali@gmail.com", 20);
// let user3 = createUser("sumbal", "sumbal@gmail.com", 20);
// console.log(user2);









