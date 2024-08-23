/*Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número.
 Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7.
 Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.*/


 //Declarar variáveis
 let diaDigitado

 //Entrada de dados
 diaDigitado = Number(prompt('Digite um dia da semana (1 a 7)'))

 switch(diaDigitado){

    case 1:
        alert('Domingo')
        break;

    case 2:
        alert('Segunda-Feira')
        break;

    case 3:
        alert('Terça-Feira')
        break;

    case 4:
        alert('Quarta-Feira')
        break;

    case 5:
        alert('Quinta-Feira')
        break;

    case 6:
        alert('Sexta-feira')
        break;

    case 7:
        alert('Sábado!')
        break;

    default:
        alert(diaDigitado + ' não é um dos dias da semana!')


 }