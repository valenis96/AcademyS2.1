// Nivell 1

// Exercici 1
const add = (a, b) => a + b;

// function sum() {
//   var firstNum = checkIsANumber(); 
//   var secondNum = checkIsANumber(); 
//   console.log(firstNum+secondNum);

// }

// function checkIsANumber() {
//   var num = prompt("Write number to sum:");
//   while(isNaN(Number(num))){
//     var num = prompt(num + " is not a number, please write a number");
//   }
//   return +num;
// }

// Exercici 2
const randomNumber = () => Math.floor(Math.random() * 101);

// Exercici 3
class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => `Hola, ${this.name}!`;
}
const p = new Person("Valentina");

// Nivell 2

// Exercici 4
const printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    ((n) => console.log(n))(numbers[i]);
  }
};

// Nivell 2

// Exercici 5
const delayedMessage = (mess) => {
  setTimeout(() => {
    console.log(mess);
  }, 3000);
};
