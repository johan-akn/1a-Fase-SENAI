/*Um festival de música está terceirizando a montagem da estrutura.
 A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. 
 O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas.
 Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.*/

programa {
  funcao inicio() {
    
    //Declarar variáveis
    inteiro banheiroQuantidade, barQuantidade
    inteiro pessoasQuantidade
    inteiro mediaPessoasBanheiro = 50, mediaPessoasBar = 150


    //Entrada de dados
    escreva("Digite a quantidade de pessoas: ")
    leia(pessoasQuantidade)


    //Cálculos
    banheiroQuantidade = pessoasQuantidade/mediaPessoasBanheiro
    barQuantidade = pessoasQuantidade/mediaPessoasBar

    
    //Saída de dados
    escreva("\nBanheiros necessários: ", banheiroQuantidade, "\n")

    escreva("Bares necessários: ", barQuantidade, "\n")
  }
}
