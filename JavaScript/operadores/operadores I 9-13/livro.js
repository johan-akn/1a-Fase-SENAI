/*Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a)
comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3
livros e mostra na tela o total dos livros sem desconto e com desconto.*/


//Declarar variáveis
let livroUm, livroDois, livroTres
let valorLivros, valorDesconto, valorTotalDesconto
let mediaCem = 100, porcentagemDesconto = 15


//Entrada de dados
livroUm = Number(prompt('Digite o valor do primeiro livro: '))
livroDois = Number(prompt('Digite o valor do segundo livro: '))
livroTres = Number(prompt('Digite o valor do terceiro livro '))


//Cálculos
valorLivros = livroUm + livroDois + livroTres
valorDesconto = (valorLivros*porcentagemDesconto) / mediaCem
valorTotalDesconto = valorLivros - valorDesconto


//Saída de dados
alert('Valor total: R$' + valorLivros + '\nValor total com desconto: R$' + valorTotalDesconto)