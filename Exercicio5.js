function Stringinvertida(str) {
    let Strinvert = '';
    for (let i = str.length - 1; i >= 0; i--) {
        Strinvert += str[i];
        }
    return Strinvert;
}

let stringOriginal = "Target Sistemas! Conhecimento acumulado para entregar o melhor produto.";
let stringInvertida = Stringinvertida(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);