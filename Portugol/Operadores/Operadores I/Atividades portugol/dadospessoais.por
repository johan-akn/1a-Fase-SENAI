 /* Criar um programa que receba o nome, idade e endere�o de uma pessoa e mostre na tela esses dados. */

programa {
  funcao inicio() {
  
    //Declarar vari�veis
   cadeia nomePessoa
   inteiro idadePessoa
   cadeia enderecoPessoa

   //Entrada de dados
   escreva("Digite seu nome: ")
   leia(nomePessoa)

   escreva("Digite sua idade: ")
   leia(idadePessoa)

   escreva("Digite seu endere�o: ")
   leia(enderecoPessoa)


   //Sa�da de dados
   escreva("\n", "Nome: ", nomePessoa, "\n")
   escreva("Idade: ", idadePessoa, "\n")
   escreva("Endere�o: ", enderecoPessoa, "\n")
  
  }
}
