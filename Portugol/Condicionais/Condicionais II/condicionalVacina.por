
/*2) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N).
 Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade.
 Caso contr�rio, mostrar mensagem "N�o pode se vacinar!". */

programa {
  funcao inicio() {
    

  //Declarar vari�veis

  cadeia nomePessoa
  inteiro idadePessoa, mediaIdade = 60
  logico comorbidadePessoa

  //Entrada de dados

  escreva("Digite seu nome: ")
   leia(nomePessoa)

  escreva("Digite sua idade: ")
   leia(idadePessoa)

   escreva("Possui comorbidade? (S/N): ")
   leia(comorbidadePessoa)


  //Sa�da de dados

  se(idadePessoa >= mediaIdade ou comorbidadePessoa == verdadeiro){
     
     escreva("\nPode se vacinar!\n")

  
  }senao{

     escreva("\nN�o pode se vacinar!\n")

  }


  }
}
