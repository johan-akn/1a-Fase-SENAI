/*Uma feira de livros est� fazendo promo��o onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto.
 Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.*/

programa {
  funcao inicio() {
    
//Declarar vari�veis
real livroUm, livroDois, livroTres
real descontoPorcentagem, descontoValor
real totalLivros, totalDesconto


//Entrada de dados
escreva("Digite o valor do primeiro livro: R$")
leia(livroUm)

escreva("Digite o valor do segundo livro: R$")
leia(livroDois)

escreva("Digite o valor do terceiro livro: R$")
leia(livroTres)

escreva("Digite a porcentagem de desconto: ")
leia(descontoPorcentagem)

//C�lculos
totalLivros = livroUm + livroDois + livroTres
descontoValor = totalLivros*descontoPorcentagem/100
totalDesconto = totalLivros - descontoValor

//Sa�da de dados
escreva("\nValor Total: R$", totalLivros)

escreva("\nValor com desconto: R$", totalDesconto, "\n")
  }
}
