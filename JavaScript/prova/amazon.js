/*No site Amazon, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética)
 utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal,
 destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque.
  O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade.
   Criar um sistema utilizando a estrutura condicional SWITCH / CASE, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10)
    sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para:
     índice abaixo de 5 (não ganha destaque), índice de 5 a menor que 7 (destaque na página da categoria),
     índice de 7 a menor que 9 (destaque em promoções), índice igual ou maior a 9 (destaque na página principal).


Critérios de avaliação:

(1,0) Receber e armazenar as notas dos três quesitos (avaliação). FEITO
(1,0) Calcular o índice do produto (média aritmética) com três casas após a vírgula e mostrar na tela. FEITO
(1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela. FEITO

*/


//Declarar variáveis
let notaUm, notaDois, notaTres
let somaNotas, mediaNotas
let relTres = 3


//Entrada de dados
notaUm = Number(prompt('Digite uma nota para a qualidade do produto (0 a 10):'))
notaDois = Number(prompt('Digite uma nota para o custo benefício do produto (0 a 10):'))
notaTres = Number(prompt('Digite uma nota para a durabilidade do produto (0 a 10):'))

//Cálculos
somaNotas = notaUm + notaDois + notaTres
mediaNotas = somaNotas / relTres


//Saída de dados
switch (true){

    case mediaNotas < 5:
        alert('Média do produto: ' + mediaNotas.toFixed(3) + '\nProduto não ganhou destaque.')
        break;

    case mediaNotas >= 5 && mediaNotas < 7:
        alert('Média do produto: ' + mediaNotas.toFixed(3) + '\nProduto ganhou destaque na página da categoria.')
        break;

    case mediaNotas >= 7 && mediaNotas < 9:
        alert('Média do produto: ' + mediaNotas.toFixed(3) + '\nProduto ganhou destaque na aba de promoções.')
        break;

    case mediaNotas >= 9:
        alert('Média do produto: ' + mediaNotas.toFixed(3) + '\nProduto ganhou destaque na página principal.')

    default:
        alert('Erro! \nVocê digitou alguma coisa errada!')
}
