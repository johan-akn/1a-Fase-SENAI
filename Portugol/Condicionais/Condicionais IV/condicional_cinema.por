/*Verificador de idade para desconto no cinema: Escreva um programa que pergunte a idade do usuário e,
 se ele tiver menos de 12 anos, conceda um desconto de 50% no ingresso do cinema;
 se ele tiver entre 12 e 18 anos, conceda um desconto de 25%; caso contrário, não conceda nenhum desconto.*/


programa {
  funcao inicio() {

    //Declarar variáveis

    inteiro idadeDigitada
    inteiro relDoze = 12, relDezoito = 18
    real valorIngresso, descontoIngresso
    real descontoUm = 0.25, descontoDois = 0.5


    //Entrada de dados
    
    escreva("Digite sua idade: ")
    leia(idadeDigitada)

    escreva("Digite o valor do ingresso (R$): ")
    leia(valorIngresso)


    //Saída de dados

    se(idadeDigitada <= relDoze){
      
      descontoIngresso = valorIngresso * descontoUm
      valorIngresso = valorIngresso - descontoIngresso

      escreva("\nDesconto de 50%!")
      escreva("Valor total R$: ", valorIngresso, "\n")


    }senao se(idadeDigitada > relDoze e idadeDigitada <= relDezoito){

      descontoIngresso = valorIngresso * descontoDois
      valorIngresso = valorIngresso - descontoIngresso

      escreva("\nDesconto de 25%!")
      escreva("Valor total R$: ", valorIngresso, "\n")


    }senao{

      escreva("\nNenhum desconto :()") 
      escreva("\nValor total: R$", valorIngresso, "\n")

    }
  }
}
