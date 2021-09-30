
//const firstPromise = document.querySelector('#firstPromise');
const firstPromise = document.getElementById('firstPromise');
const secondPromise = document.getElementById('secondPromise');

const output = document.querySelector('output');

function getRandomNumber () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = Math.floor(Math.random() * 100);
      if (result > 50) {
        resolve(result);
      }else{
        resolve(reject);
      }
    }, 3000);
  });
}

firstPromise.onclick = function () {
  console.log('Creando Promesa');
  const numberPromise = getRandomNumber();
  
  numberPromise.then(
    (result) => {
      console.log(`Éxito! ${result}`);
    }, 
    (result) => {
      console.log(`Falló! ${result}`);
    });

    console.log('Promesa Lista');
}

secondPromise.onclick = function(){
  fetch('https://www.javascripttutorial.net/sample/promise/api.json').then(
    (response) => {
      response.json().then(
        (data) =>{
        output.innerHTML = data.message;
      },
      (error) => {
        console.error('json crash');
        output.innerHTML = error;
      });
    }, 
    (error) => {
      console.error('fetch crash');
      output.innerHTML = error;
    });
}