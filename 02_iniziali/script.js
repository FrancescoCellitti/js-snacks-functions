/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const primaLettera = (lista) => {
    let newArray=[]
    for (i= 0; i<lista.length; i++){
        newArray.push(lista[i].charAt(0))
    }
    console.log(newArray)
}

// Invoca la funzione qui e stampa il risultato in console
primaLettera(names)



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]