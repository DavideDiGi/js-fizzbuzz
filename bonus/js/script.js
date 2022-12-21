/*
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

const domContainer = document.querySelector(".container");
const bythree = "Fizz"
const byfive = "Buzz"
const bythrive = "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        element = `<div class="box fizz-buzz ${i}">${bythrive}</div>`;
        domContainer.innerHTML += element;

        // element.style.color="red";
        
        
    }
    else if (i % 3 == 0) {
        element = `<div class="box fizz ${i}">${bythree}</div>`;
        domContainer.innerHTML += element ;
    }
    else if (i % 5 == 0) {
        element = `<div class="box buzz ${i}">${byfive}</div>`;
        domContainer.innerHTML += element;
    }
    else {
        element = `<div class="box box--${i}">${i}</div>`;
        domContainer.innerHTML += element;
    }

}