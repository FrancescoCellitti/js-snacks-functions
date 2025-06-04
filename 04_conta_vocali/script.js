/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const contaVocali = (str) => {
    let count = 0;
    let newStr = "";
    for (i = 0; i < str.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
            count += 1;
            if (newStr.length != 0) {
                newStr = newStr + ", " + str[i]
            } else {
                newStr = newStr + str[i]
            }

        }

    }
    console.log(`${count} (${newStr})`)
}


// Invoca la funzione qui e stampa il risultato in console
contaVocali(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)