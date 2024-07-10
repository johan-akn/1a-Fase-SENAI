/*5) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia.
  Um número primo é aquele que é divisível apenas por um e por ele mesmo.
   Faça um programa que peça ao usuário para digitar cinco números inteiros
    e mostre na tela se são primos ou não*/


//Declarar variáveis
let numeroDigitado, numeroPrimo = '', numeroNormal = ''
let cont = 0


while(cont<5){

    numeroDigitado = Number(prompt('Digite 5 números:'))

if(numeroDigitado == 2  || numeroDigitado == 3 || numeroDigitado % 2 != 0 && numeroDigitado % 3 != 0 && numeroDigitado != 1){

    numeroPrimo += '\n' + numeroDigitado + ';'
    
    
}
else{
    numeroNormal += '\n' + numeroDigitado + ';'
    

}

cont++

}

alert('Números primos: ' + numeroPrimo + '\n\nNúmeros normais: ' + numeroNormal)