/*Um festival de m�sica est� terceirizando a montagem da estrutura.
 A empresa contratada necessita saber uma estimativa de p�blico para calcular a quantidade de bares e banheiros. 
 O c�lculo utilizado � de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas.
 Criar um programa onde seja digitado o p�blico esperado e mostrar na tela em m�dia quantos banheiros e bares seriam necess�rios.*/

programa {
  funcao inicio() {
    
    //Declarar vari�veis
    inteiro banheiroQuantidade, barQuantidade
    inteiro pessoasQuantidade
    inteiro mediaPessoasBanheiro = 50, mediaPessoasBar = 150


    //Entrada de dados
    escreva("Digite a quantidade de pessoas: ")
    leia(pessoasQuantidade)


    //C�lculos
    banheiroQuantidade = pessoasQuantidade/mediaPessoasBanheiro
    barQuantidade = pessoasQuantidade/mediaPessoasBar

    
    //Sa�da de dados
    escreva("\nBanheiros necess�rios: ", banheiroQuantidade, "\n")

    escreva("Bares necess�rios: ", barQuantidade, "\n")
  }
}
