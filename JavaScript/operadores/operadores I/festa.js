/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber.
 Para tanto, foram comprados 300 litros de chopp.
 Criar um programa que calcule a média de litros bebidos por pessoa,
 considerando ainda a quantidade de chopp (litros) desperdiçado e
 a quantidade de chopp (litros) que sobrou.
 Esses dados devem ser digitados pelo usuário.
 Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.
 Ao final, mostrar a média de litros bebidos por pessoa na festa.*/


 //Declarar variáveis
 let pessoasFesta = 45, choppTotal = 300
 let choppDesperdicado, choppRestante
 let mediaChoppBebido
 


 //Entrada de dados
 choppDesperdicado = prompt('Quantidade de chopp desperdiçado: ')
 choppRestante = prompt('Quantidade de chopp restante: ')

 
 //Cálculos
 mediaChoppBebido = (choppTotal - choppDesperdicado) - choppRestante
 mediaChoppBebido = mediaChoppBebido / pessoasFesta


 //Saída de dados
 alert('Foram bebidos em média ' + mediaChoppBebido + ' litros de chopp por pessoa.')


