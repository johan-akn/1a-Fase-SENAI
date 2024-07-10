/*Criar um programa que calcule o IMC, no qual o usuário deve digitar
 o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela*/


 //Declarar variáveis
 let alturaUsuario, pesoUsuario
 let resultadoIMC

 
 //Entrada de dados
 alturaUsuario = prompt('Digite sua altura (em metros): ')
 pesoUsuario = prompt('Digite seu peso (em quilos): ')


 //Cálculo
 resultadoIMC = pesoUsuario / (alturaUsuario * alturaUsuario)

 
 //Saída de dados
 alert('IMC: ' + resultadoIMC)
