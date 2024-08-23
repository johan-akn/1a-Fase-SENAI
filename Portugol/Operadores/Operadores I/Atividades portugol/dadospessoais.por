 /* Criar um programa que receba o nome, idade e endereço de uma pessoa e mostre na tela esses dados. */

programa {
  funcao inicio() {
  
    //Declarar variáveis
   cadeia nomePessoa
   inteiro idadePessoa
   cadeia enderecoPessoa

   //Entrada de dados
   escreva("Digite seu nome: ")
   leia(nomePessoa)

   escreva("Digite sua idade: ")
   leia(idadePessoa)

   escreva("Digite seu endereço: ")
   leia(enderecoPessoa)


   //Saída de dados
   escreva("\n", "Nome: ", nomePessoa, "\n")
   escreva("Idade: ", idadePessoa, "\n")
   escreva("Endereço: ", enderecoPessoa, "\n")
  
  }
}
