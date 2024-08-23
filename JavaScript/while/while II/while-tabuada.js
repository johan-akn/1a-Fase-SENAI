/*1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.*/


let numeroDigitado, resultadoMultiplicacao
let cont = 0
let resultadoTabuada = ''
 
alert('Digite um número inteiro e veja sua tabuada de 1 a 10.')

numeroDigitado = Number(prompt('Número:'))

while(cont < 10){

    resultadoMultiplicacao = numeroDigitado * cont

    resultadoTabuada += (numeroDigitado + ' x ' + cont + ' = ' + resultadoMultiplicacao + '\n') 

    cont++
}

alert(resultadoTabuada)

