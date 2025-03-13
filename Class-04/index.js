// FUNCTION DECLERATION

// let user = 'Faiq';
// function welcomeUser(){
//     return `Welcome ${user}`;
// }

// let msg = welcomeUser();
// console.log(msg);

// function sum(num1, num2){
//     return num1 + num2;
// }

// let ans = sum(1, 6);
// console.log(ans);

// FUNCTION EXPRESSION

// let sum = function(num1, num2){
//     return num1 + num2;
// }

// let ans = sum(1, 6);
// console.log(ans);

// ARROW FUNCTION
// let sum = (num1, num2) => {
//     return num1 + num2;
// }

// let ans = sum(1, 6);
// console.log(ans);

// let wlcmUser = username => `Welcome ${username}`;

// let msg = wlcmUser('ali');
// console.log(msg);

// FUNCTION INSIDE A FUNCTION

// function func1(){
//     function func2(){
//         return 'Inside func2'
//     }
//     let var1 =  func2();
//     console.log(var1);
//     return 'inside func1';
// }

// let something = func1();
// console.log(something);

// let func1 = () => {
//     let func2 = () => {
//         return 'Inside func2';
//     }

//     let var1 = func2();
//     console.log(var1);
//     return 'Inside func1';
// }

// let var2 = func1();
// console.log(var2);

// LEXICAL SCOPING

// let var1 = 'one value';

// let func1 = () => {
//     let func2 = () => {
//         console.log(var1);
//     }
//     func2();
//     console.log(var1);
// }

// func1();

// BLOCK SCOPE VS FUNCTION SCOPE
// {
//   var var1 = "var value"; // F
//   let var2 = "let value"; // B
//   const var3 = "const value"; // B
// }


// {
//     console.log(var1);
//     console.log(var2);
//     console.log(var3);
// }

// {
//     {
//         {

//         }
//     }
// }


// DEFAULT PARAMETERS


// let sum = function(num1=0, num2=0){
//     return num1 + num2;
// }

// let ans = sum();
// console.log(ans);


// REST PARAMETERS

// function sumTotal(...numbers){
//     let total = 0;
//     for(let number of numbers){
//        total = total + number;
//     }
//     return total
// }

// let ans = sumTotal(5,5,5,5,5,5,5);
// console.log(ans);


// CALLBACK FUNCTIONS

// let func = (callback, number) => {
//       let num = callback();
//       return num + number;
// }

// let ans = func(() => 5, 10);
// console.log(ans);


// FUNCTION RETURNING A FUNCTION

// let func1 = (num) => {
//     let func2 = () => {
//         return num * num;
//     }

//     return func2;
// }

// let answerFunc = func1(5);
// let ans = answerFunc();
// console.log(ans);

