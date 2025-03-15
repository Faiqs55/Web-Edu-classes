// SCRIPT #1 
// let num = 2;
// function myFunc(num1, num2){
//    console.log(arguments);
//    return num1 + num2;
// }

// let ans = myFunc(2,4);
// console.log(ans);


// SCRIPT #2 
// let user = "Faiq";
// let greet = function(){
//      return `Hello ${user}`
// }

// let msg = greet();
// console.log(msg);



// SCRIPT #3 
// let outerFunc = (user) => {
//     return () => {
//         console.log(`User is ${user}`);
//     }
// }

// let innerFunc = outerFunc("Faiq");
// innerFunc();



// MAKE A FUNCTION THAT KEEPS TRACK OF THE NUMBER OF TIMES IT WAS CALLED

let outer = () => {
    let counter = 1;
    return () => {
       console.log(`I have been called ${counter} times`);
       counter++;
    }
}
let counterFunc = outer();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();
counterFunc();