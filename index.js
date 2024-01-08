document.open();
let userInput = prompt("Enter your score:");
userScore = Number(userInput);

// if statement
//_____________
// if (isNaN(userScore) || userInput === null) {
//   document.write("Not a Number ❌.");
// } else if (userScore < 100 && userScore >= 85) {
//   document.write("You got an A 🎉.");
// } else if (userScore < 85 && userScore >= 75) {
//   document.write("You got a B 😊.");
// } else if (userScore < 75 && userScore >= 65) {
//   document.write("You got a C 🙂.");
// } else if (userScore < 65 && userScore >= 50) {
//   document.write("You got a D 🤔.");
// } else if (userScore < 50 && userScore >= 0) {
//   document.write("You got an F 😥.");
// } else if (userScore === 100) {
//   document.write("Perfect Score 🏆");
// } else {
//   document.writet("Invalid Score! Please enter between 0 and 100. Try again");
// }

//#######################

// Switch statement
// switch (true) {
//   case userScore < 100 && userScore >= 85:
//     document.write("You got an A 🎉.");
//     break;
//   case userScore < 85 && userScore >= 75:
//     document.write("You got a B 😊.");
//     break;
//   case userScore < 75 && userScore >= 65:
//     document.write("You got a C 🙂.");
//     break;
//   case userScore < 65 && userScore >= 50:
//     document.write("You got a D 🤔.");
//     break;
//   case userScore < 50 && userScore >= 0:
//     document.write("You got an F 😥.");
//     break;
//   case userScore === 100:
//     document.write("Perfect Score 🏆");
//     break;
//   case isNaN(userScore):
//     document.write("Not a Number ❌.");
//     break;
//   case userInput === null /* not working as intended*/:
//     document.write("Not a Number ❌.");
//     break;
//   default:
//     document.writet("Invalid Score! Please enter between 0 and 100. Try again");
// }

//#####################

document.close();

// In-session assignment:
// How to iterate throguh an object using for loop
// let person = {
//   name: "John",
//   age: "20",
//   location: "Sweden",
// };

// let keys = Object.keys(person);
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log(key + ": " + person[key]);
// }
