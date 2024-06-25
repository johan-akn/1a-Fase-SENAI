/*Fazer um programa no qual o usuário digite a sua altura e o seu peso,
 ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso
 (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).*/


 //Declarar variáveis
 let alturaUsuario, pesoUsuario
 let resultadoIMC, relDezoito = 18, relVinteCinco = 25

 
 //Entrada de dados
 alturaUsuario = prompt('Digite sua altura (em metros): ')
 pesoUsuario = prompt('Digite seu peso (em quilos): ')


 //Cálculo
 resultadoIMC = pesoUsuario / (alturaUsuario * alturaUsuario)

 
 //Saída de dados
 if(resultadoIMC < relDezoito){
    
    alert('Abaixo do peso! \nIMC: ' + resultadoIMC)

 }
 else if(resultadoIMC >= relDezoito && resultadoIMC <= relVinteCinco){

    alert('Peso ideal! \nIMC: ' + resultadoIMC)

 }
 else{

    alert('Acima do peso! \nIMC: ' + resultadoIMC)
 }
