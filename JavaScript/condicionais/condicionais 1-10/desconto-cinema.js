/*Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema.
 Deve ser perguntado o valor do ingresso e a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 50% no ingresso do cinema.
 Se ela tiver de 13 a 17 anos, conceda um desconto de 25%. Caso contrário (18 anos ou mais), não conceda nenhum desconto. Mostrar ao final o valor que a pessoa deve pagar.*/


 //Declarar variáveis
 let idadeDigitada, mediaDoze = 12, mediaDezessete = 17


 //Entrada de dados
 idadeDigitada = prompt('Digite sua idade: ')


 //Saída de dados
 if(idadeDigitada <= mediaDoze){

    alert('Desconto de 50%!')

 }
 else if(idadeDigitada > mediaDoze && idadeDigitada <= mediaDezessete){

    alert('Desconto de 25%!')

 }
 else{

    alert('Nenhum desconto :<')
 }