/*2 - Ler as notas da 1a e 2a avaliação de um aluno. 
Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado 
(considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.*/

function calculaNota(a, b){
    resultado = (a + b) / 2;
    if(resultado < 7){
        return "Reprovado"
    }
    else {
        return "Aprovado"
    }
}

var avaliacao01 = Math.floor(Math.random() * 10); 
var avaliacao02 = Math.floor(Math.random() * 10); 

var nota01 = avaliacao01;
var nota02 = avaliacao02;
var resultado = calculaNota(nota02, nota02 );

console.log("Primeira Nota: " + nota01 + "\nSegunda Nota: " + nota02 + "\n O resuldato é " + resultado);