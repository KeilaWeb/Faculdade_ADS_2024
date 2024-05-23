//1 – Ler um valor e escrever se é positivo, negativo ou zero.

function verificaNumero(numero){
    if(numero > 0) {
        return "Positivo";
    }else if (numero < 0) {
        return "Negativo";
    }else {
        return "Zero";
    }
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var numero = numeroAleatorio(-100, 100);
var resultado = verificaNumero(numero);
console.log("O número: " + numero + " é " + resultado);


///Gerando uma letra do alfabeto

function letraAleatoria() {
    var codigo = Math.floor(Math.random() * 26) + 65; // Gerando um número aleatório entre 65 (ASCII para 'A') e 90 (ASCII para 'Z')
    var letra = String.fromCharCode(codigo); // Converte o código ASCII para uma letra
    return letra;
}

var letra = letraAleatoria();
console.log("Jogue com a letra: " + letra);

/*
ASCII (American Standard Code for Information Interchange) é um conjunto de códigos de caracteres utilizado para representar 
texto em computadores e dispositivos de comunicação que usam o sistema de codificação de caracteres baseado em inglês. 
*/
