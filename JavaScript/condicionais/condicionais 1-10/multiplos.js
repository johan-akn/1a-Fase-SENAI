/*Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3.
 Após digitar o número, mostrar uma das seguintes mensagens na tela “É múltiplo de 3!” ou “Não é múltiplo de 3”.*/


 //Declarar variáveis
 let numeroDigitado, relTres = 3, relZero = 0


 //Entrada de dados
 numeroDigitado = prompt('Digite um número inteiro: ')


 //Saída de dados
 if(numeroDigitado % relTres == relZero){
    
    alert('É múltiplo de 3!')
    
 }
 else{

    alert('Não é múltiplo de 3.')

 }