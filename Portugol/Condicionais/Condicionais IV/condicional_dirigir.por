/*Simulador de trânsito: Crie um programa que pergunte a idade do usuário e,
 se ele tiver idade suficiente para dirigir (por exemplo, 18 anos),
 exiba "Você pode dirigir"; caso contrário, exiba "Você ainda não pode dirigir".*/


programa {
  funcao inicio() {

    //Declarar variáveis

    inteiro idadeDigitada
    inteiro idadeMinima = 18


    //Entrada de dados
    
    escreva("Digite sua idade: ")
    leia(idadeDigitada)


    //Saída de dados

    se(idadeDigitada >= idadeMinima){

      escreva("\nPode dirigir!\n")


    }senao{

      escreva("\nNão pode dirigir!\n")
    }









  }
}
