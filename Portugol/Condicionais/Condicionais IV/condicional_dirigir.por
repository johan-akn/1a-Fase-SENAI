/*Simulador de tr�nsito: Crie um programa que pergunte a idade do usu�rio e,
 se ele tiver idade suficiente para dirigir (por exemplo, 18 anos),
 exiba "Voc� pode dirigir"; caso contr�rio, exiba "Voc� ainda n�o pode dirigir".*/


programa {
  funcao inicio() {

    //Declarar vari�veis

    inteiro idadeDigitada
    inteiro idadeMinima = 18


    //Entrada de dados
    
    escreva("Digite sua idade: ")
    leia(idadeDigitada)


    //Sa�da de dados

    se(idadeDigitada >= idadeMinima){

      escreva("\nPode dirigir!\n")


    }senao{

      escreva("\nN�o pode dirigir!\n")
    }









  }
}
