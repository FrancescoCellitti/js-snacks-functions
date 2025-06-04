/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
/* const lettera = prompt("inserire una lettera") */

// Dichiara la funzione qui.
const filtroIniziali = (lista, lettera) => {
    let newArray = []
    for (i = 0; i < lista.length; i++) {
        if (lista[i].charAt(0) == lettera) {
            newArray.push(lista[i])
        }
    }
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filtroIniziali(names, "A"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]