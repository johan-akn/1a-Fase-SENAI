/*Seu sonho é construir uma piscina.
 Para cada metro quadrado, são necessários 120 azulejos.
 O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento.
 Digitar os valores (em metros) da largura e comprimento que deseja a piscina.
 Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago,
 sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/


 //Declarar variáveis

 let mediaAzulejos = 120, valorCaixa = 45.50, mediaCaixa = 60
 let areaPiscina, larguraPiscina, comprimentoPiscina
 let valorTotal, azulejosNecessarios, caixasNecessarias

 
 //Entrada de dados
 larguraPiscina = prompt('Qual a largura desejada?')
 comprimentoPiscina = prompt('Qual o comprimento desejado?')


 //Cálculos
 areaPiscina = larguraPiscina * comprimentoPiscina
 azulejosNecessarios = areaPiscina * mediaAzulejos
 caixasNecessarias = azulejosNecessarios / mediaCaixa
 valorTotal = valorCaixa * caixasNecessarias


 //Saída de dados
 alert('Azulejos necessários: ' + azulejosNecessarios + '\nValor Total: R$' + valorTotal)

