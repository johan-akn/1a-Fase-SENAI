/*Escreva  um programa para ler 2 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/


//Declarar variáveis
let numeroUm, numeroDois
let maiorNumero


//Entrada de dados
numeroUm = prompt('Digite o primeiro número: ')

maiorNumero = numeroUm

numeroDois = prompt('Digite o segundo número: ')

if(numeroDois > maiorNumero){

    maiorNumero = numeroDois

    alert('Maior número: ' + maiorNumero)

}
else{

    alert('Maior número: ' + maiorNumero)
}
