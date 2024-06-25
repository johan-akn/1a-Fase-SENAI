/*Escreva um programa para ler o ano  de nascimento de uma pessoa e escrever uma mensagem
 que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).*/


//Declarar variáveis
let anoAtual = 2024, anoDigitado
let idadeUsuario, mediaDezesseis = 16


//Entrada de dados
anoDigitado = prompt('Digite o ano em que você nasceu: ')


//Cálculo
idadeUsuario = anoAtual - anoDigitado


//Saída de dados
if(idadeUsuario >= mediaDezesseis){

    alert('Pode votar esse ano!')

}
else{

    alert('Não pode votar esse ano!')
}
