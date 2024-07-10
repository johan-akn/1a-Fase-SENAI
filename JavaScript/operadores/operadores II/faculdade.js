/*Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade.
 A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final.
 O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.*/


 //Declarar variáveis
 let atividadeIndividual, seminarioEquipe, projetoFinal
 let pesoNotaUm, pesoNotaDois, pesoNotaTres
 let mediaFinal, relTres = 3, relDez = 10


 //Entrada de dados
 atividadeIndividual = prompt('Digite a nota de sua Atividade Individual ')
 pesoNotaUm = prompt('Digite o peso da nota: ')

 seminarioEquipe = prompt('Digite a nota do seu Seminário em Equipe ')
 pesoNotaDois = prompt('Digite o peso da nota: ')

 projetoFinal = prompt('Digite a nota do sua Projeto Final ')
 pesoNotaTres = prompt('Digite o peso da nota: ')

 
 //Cálculos
 totalNotas = atividadeIndividual + seminarioEquipe + projetoFinal
 somaPesos = pesoNotaUm + pesoNotaDois + pesoNotaTres
 mediaFinal = totalNotas/somaPesos * relDez


 //Saída de dados
 alert('Média final: ' + mediaFinal)
