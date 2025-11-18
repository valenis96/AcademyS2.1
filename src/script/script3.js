// Callbacks
const process = (callback, num1, num2) => {
   callback(num1, num2);
};

const waitBeforeToProcess = (callback, string) => {
  setTimeout(() => {
    callback(string);
  }, 2000);
};

const processElements = (callback, arr) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

const processString = (callback, string) => {
  callback(string.toUpperCase());
};

// Exercici 1 i 4
const printNum = (n) => console.log("El número es: ", n);

// Exercici 2
const sum = (n1, n2) => console.log("La suma es: ", n1 + n2);

// Exercici 3
const saludar = (nom) => console.log(`Hola, ${nom}!`);

// Exercici 5
const print = (s) => console.log(s);