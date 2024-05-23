/*5 - Ler 3 valores e escrevê-los em ordem crescente.*/
function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return x - y;
    });
    return numeros;
}

var valor1 = Math.floor(Math.random() * 100);
var valor2 = Math.floor(Math.random() * 100);
var valor3 = Math.floor(Math.random() * 100);

var crescente = ordemCrescente(valor1, valor2, valor3);

console.log("Valores originais: " + valor1 + ", " + valor2 + ", " + valor3);
console.log("Valores em ordem crescente: " + crescente[0] + ", " + crescente[1] + ", " + crescente[2]);

