/*Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit.
 Mostrar o resultado na tela.*/

 //Declarar variáveis
 let temperaturaDigitada
 let resultadoConversao
 let mediaUm = 1.8, mediaDois = 32
 

 //Entrada de dados
 temperaturaDigitada = prompt('Digite a temperatura (°C): ')


 //Cálculo
 resultadoConversao = temperaturaDigitada * mediaUm + mediaDois


 //Saída de dados
 alert('Resultado da conversão: ' + resultadoConversao + '°F')
