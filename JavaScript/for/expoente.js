/*3) Fazer um programa no qual o usuário deve digitar um número e o expoente dele.
 Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).*/

 //Declarar variáveis
 let numeroDigitado, numeroExpoente, resultadoCalculo = 0

 numeroDigitado = Number(prompt('Digite um número:'))

 numeroExpoente = Number(prompt('Digite um expoente para este número:'))

 for(i = numeroExpoente; i > 0; i--){

    resultadoCalculo += numeroDigitado
 }
 alert('Resultado de ' + numeroDigitado + ' vezes ' + numeroExpoente + ': ' + resultadoCalculo)