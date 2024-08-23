/*Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.*/

//Declarar variáveis
let numeroUm, numeroDois
let maiorNumero, menorNumero


//Entrada de dados
numeroUm = prompt('Digite o primeiro número: ')

maiorNumero = numeroUm
menorNumero = numeroUm

numeroDois = prompt('Digite o segundo número: ')

if(numeroDois > maiorNumero){


    maiorNumero = numeroDois

    alert('Maior número: ' + maiorNumero + '\nMenor número: ' + menorNumero)
}
else if(numeroDois < menorNumero){


    menorNumero = numeroDois

    alert('Maior número: ' + maiorNumero + '\nMenor número: ' + menorNumero)


}
else if(numeroUm = numeroDois){

    alert('Os números são iguais')

}



