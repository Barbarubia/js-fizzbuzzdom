//  Definisco l'elemento all'interno del quale genererò le caselle
let areaContent = document.querySelector(`.content`);

// Genero un ciclo for definendo una variabile i con valori compresi tra 1 e 100;

for (let i = 1; i <= 100; i++) {
    // creo un elemento div
    let div = document.createElement('div');
    // attribuisco all'elemento div la classe box, definita nel css
    div.classList.add('box');
       
    // condizione: i multiplo di 3 ma non multiplo di 5
    if (i % 3 == 0 && i % 5 !== 0) {
        // aggiungo a questa condizione la classe yellow per cambiare il colore dello sfondo e la classe text-style per formattare il testo
        div.classList.add('yellow', 'text-style');
        // stampo la scritta Fizz
        div.innerHTML = `Fizz`;
    }
        // condizione: i multiplo di 5 ma non multiplo di 3
        else if (i % 5 == 0 && i % 3 !== 0) {
        // aggiungo a questa condizione la classe green per cambiare il colore dello sfondo e la classe text-style per formattare il testo
        div.classList.add('green', 'text-style');
        // stampo la scritta Buzz
        div.innerHTML = `Buzz`;
    }
        // condizione: i multiplo sia di 3 sia di 5
        else if (i % 3 == 0 && i % 5 == 0) {
        // aggiungo a questa condizione la classe cyan per cambiare il colore dello sfondo e la classe text-style per formattare il testo
        div.classList.add('cyan', 'text-style');
        // stampo la scritta FizzBuzz
        div.innerHTML = `FizzBuzz`;
    }
        // altrimenti tutti gli altri casi (i né multiplo di 3 né di 5)
        else {
        // stampo il valore di i
        div.innerHTML = i;
    }
    // Appendo l'elemento div creato all'interno del suo container
    areaContent.append(div);
}
