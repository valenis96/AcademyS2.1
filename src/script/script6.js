// Exercici 1 
const printNames1 = (names) => names.forEach(name => console.log(name));

// Exercici 2
const printNames2 = (names) => {
  for (const name of names) console.log(name)
}

// Exercici 3
const oddFilter = (nums) => nums.filter(num => num % 2 === 0);


// Exercici 4
const printKeyAndValue = () => {
  let objForIf = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
  };
  
  for (const key in objForIf) {
    if (!Object.hasOwn(objForIf, key)) continue;
    console.log(key, objForIf[key]);
  }
};

// Exercici 5
const findFive = (nums) => {
  for (const num of nums) {
     console.log(num);
     if (num === 5) break;
  }
}

// Exercici 6
const printArrayAndPosition = (noms) => {
for (const [index, nom] of noms.entries()) {
  console.log(index, nom);
}
}

