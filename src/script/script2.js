// Nivell 1

// Exercici 1
const canDrive = (age) =>
  age >= 18 ? "Pots conduir" : "No pots conduir";

// Exercici 2
const compare = (num1, num2) =>
  num1 > num2 ? num1 + " es més gran" : num2 + " es més gran";

// Exercici 3
const isPositive = (num) =>
  num > 0 ? "Positiu"
  : num < 0 ? "Negatiu"
  : "Zero";

  const findMax = (a, b, c) =>
  a > b
    ? (a > c ? a : c)
    : (b > c ? b : c);

// Exercici 4
const evenOrOdd = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const resultat = nums[i] % 2 === 0 ? "parell" : "imparell";
    console.log(`${nums[i]} es ${resultat}`);
  }
};