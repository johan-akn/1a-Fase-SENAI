
/*2) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N).
 Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade.
 Caso contrário, mostrar mensagem "Não pode se vacinar!". */

programa {
  funcao inicio() {
    

  //Declarar variáveis

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


  //Saída de dados

  se(idadePessoa >= mediaIdade ou comorbidadePessoa == verdadeiro){
     
     escreva("\nPode se vacinar!\n")

  
  }senao{

     escreva("\nNão pode se vacinar!\n")

  }


  }
}
