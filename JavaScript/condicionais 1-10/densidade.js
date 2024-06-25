/* Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região.
 Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados).
 Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25)*/


 //Declarar variáveis
 let populacaoDigitada, areaDigitada, densidadeFinal
 let mediaCem = 100, mediaVinteCinco = 25


 //Entrada de dados
 populacaoDigitada = prompt('Digite a quantidade de habitantes: ')
 areaDigitada = prompt('Digite a área (km²): ')


 //Cálculo
 densidadeFinal = populacaoDigitada / areaDigitada

 
 //Saída de dados
 
 if(densidadeFinal >= mediaCem){

    alert('Densidade alta!\nDensidade: ' + densidadeFinal + ' habitantes por km²')

 }
 else if(densidadeFinal >= relVinteCinco && densidadeFinal < mediaCem){

    alert('Densidade média.\nDensidade: ' + densidadeFinal + ' habitantes por km²')

 }
 else{

    alert('Densidade baixa.\nDensidade: ' + densidadeFinal + ' habitantes por km²')
 }