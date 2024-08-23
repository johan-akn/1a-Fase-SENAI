/*Faça um programa que solicite o salário e os anos de serviço de um funcionário.
 Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário*/


 //Declarar variáveis
 let salarioDigitado, tempoServico, salarioFinal
 let relCinco = 5, relCem = 100, salarioBonus


 //Entrada de dados
 salarioDigitado = Number(prompt('Digite seu salário: '))
 tempoServico = prompt('Digite seu tempo de serviço: ')


 //Cálculos
salarioBonus = (relCinco / relCem) * salarioDigitado
salarioFinal = salarioDigitado + salarioBonus


 //Saída de dados
 if(tempoServico > relCinco){

    alert('Você recebeu um bônus de 5%!\nSalário: R$' + salarioFinal)

 }
 else{

    alert('Você não recebeu nenhum bônus :< \nSalário: R$' + salarioDigitado)
 }