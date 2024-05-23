/*5 - Ler 2 valores e escrevê-los em ordem crescente.*/
function escreverEmOrdemCrescente(valor1, valor2) {
    if (valor1 < valor2) {
        return valor1 + ", " + valor2;
    } else {
        return valor2 + ", " + valor1;
    }
}
var valor1 = Math.floor(Math.random() * 100);
var valor2 = Math.floor(Math.random() * 100);

var crescente = escreverEmOrdemCrescente(valor1, valor2);

console.log("valor 1: "+ valor1 +  " | " + "Valor 2: " + valor2)
console.log("A ordem é: ", crescente);
