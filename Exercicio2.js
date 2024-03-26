const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0) {
        console.log("O número 0 pertence à sequência de Fibonacci.");
        return;
    }
    
    while (b <= numero) {
        if (b === numero) {
            console.log("O número", numero, "pertence à sequência de Fibonacci.");
            return;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    console.log("O número", numero, "não pertence à sequência de Fibonacci.");
}

rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", function(numero) {
    numero = parseInt(numero);
    if (!isNaN(numero)) {
        verificaFibonacci(numero);
    } else {
        console.log("Por favor, insira um número válido.");
    }
    rl.close();
});
