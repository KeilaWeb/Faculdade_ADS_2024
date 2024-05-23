/*3 - Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não 
votar este ano (não é necessário considerar o mês em que a pessoa nasceu).*/

function podeVotar(anoAtual, anoNascimento) {
    var idade = anoAtual - anoNascimento;
    if (idade >= 16) {
        return `Você tem ${idade} anos, pode votar`;
    } else {
        return `Você tem ${idade} anos, não pode votar`;
    }
}


var anoAtual = new Date().getFullYear();

var anoNascimento = Math.floor(Math.random() * (anoAtual - 1923 + 1)) + 1923;

console.log("Ano de nascimento:", anoNascimento);
console.log("Ano atual:", anoAtual);
console.log(podeVotar(anoAtual, anoNascimento)); 