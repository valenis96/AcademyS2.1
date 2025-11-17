// Exercici 1 
const promiseHelloWorld = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hola, món');
  }, 2000);
});

// Exercici 2
const helloWorld = () => promiseHelloWorld.then((res) => console.log(res));

// Exercici 3
function checkInput(input) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      input === 'Hola'? resolve('Input correcte!') : reject('Error: input incorrecte');
    }, 2000);
  });
  promise.then((res) => console.log(res)).catch((res) => console.log(res))
}

// Exercici 4
async function showHelloWorld() {
  const res = await promiseHelloWorld;
  console.log(res);
}

// Exercici 5
async function showHelloWorld2() {
  try {
    const res = await promiseHelloWorld;
    console.log(res);
  } catch (error) {
    console.error("S'ha produït un error:", error);
  }
}

// Exercici 6
const prom1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promesa 1 resolta després de 2 segons');
  }, 2000);
});

const prom2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promesa 2 resolta després de 3 segons');
  }, 3000);
});

function promiseAll() {
  Promise.all([prom1, prom2])
  .then((res) => console.log(res))
  .catch((errore) => console.error('Errore:', errore));
}
