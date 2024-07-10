/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento
 no formato (YYYY) e o ano atual também no formato (YYYY).
 Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas*/


 //Declarar variáveis
 let anoNascimento, anoAtual
 let idadeAnos, idadeMeses, idadeSemanas, idadeDias
 let mediaAno = 365, mediaMes = 30, mediaSemana = 7


 //Entrada de dados
 anoNascimento = prompt('Digite seu ano de nascimento: ')
 anoAtual = prompt('Digite o ano atual')

 
 //Cálculos
 idadeAnos = anoAtual - anoNascimento
 idadeDias = idadeAnos * mediaAno
 idadeMeses = idadeDias / mediaMes
 idadeSemanas = idadeDias / mediaSemana


 //Saída de dados
 alert('O usuário viveu aproximadamente \n' + idadeAnos + ' anos\n' + idadeMeses + ' meses\n' + idadeSemanas + ' semanas\n' + idadeDias + ' dias.')


 


