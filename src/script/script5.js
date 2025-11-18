// Exercici 1 
const squares = (nums) => nums.map(num => num * num);

// Exercici 2
const even = (nums) => nums.filter(num => num % 2 === 0);

// Exercici 3
const findMaxTen = (nums) => nums.find(num => num > 10);

// Exercici 4
const sumReduce = (nums) => nums.reduce((acc, num) => acc + num, 0);

// Exercici 5
const oneLineCode = (nums) => nums.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

// Exercici 6
const every = (nums) => nums.every(num => num > 10);
const some = (nums) => nums.some(num => num > 10);
