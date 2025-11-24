// Exercici 1 
const buildArray3 = (array1, array2) => [...array1, ...array2];

// Exercici 2
const addRest = (...nums) => nums.reduce((acc, n) => acc + n, 0);

// Exercici 3
const object1 = {
  nom: "Valentina",
  edat: 28,
  ciutat: "Barcelona"
};

const secondObject = () =>{
  const object2 = { ...object1 };
  object2.edat = 30;
  console.log(object1);
  console.log(object2);
}

// Exercici 4
const destructuring = (numbers) =>{
  const[first, second, ...rest] = numbers;
  console.log(first); 
  console.log(second);  
  console.log(rest);  
} 

// Exercici 5
const showThree = (a, b, c) => {
  console.log(a, b, c);
};

// Exercici 6
const obj1 = {
  name: "Valentina",
  age: 28
};

const obj2 = {
  city: "Barcelona",
  job: "Frontend Developer"
};

const combinedObjs = {
  ...obj1,
  ...obj2
};

