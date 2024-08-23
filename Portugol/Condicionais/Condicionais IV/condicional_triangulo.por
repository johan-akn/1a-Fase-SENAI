/*1) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. 
Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três
lados diferentes é um triângulo escaleno.*/


programa {
  funcao inicio() {

  //Declarar variáveis

  inteiro ladoUm, ladoDois, ladoTres


  //Entrada de dados

  escreva("Digite o valor do primeiro lado: ")
  leia(ladoUm)

  escreva("Digite o valor do segundo lado: ")
  leia(ladoDois)

  escreva("Digite o valor terceiro lado: ")
  leia(ladoTres)


  //Saída de dados

  se(ladoUm == ladoDois e ladoUm == ladoTres e ladoDois == ladoTres){

    escreva("\nTriângulo equilátero!\n")
  
  }senao se(ladoUm == ladoDois ou ladoUm == ladoTres ou ladoDois == ladoTres){

    escreva("\nTriângulo isóceles!\n")

  }senao{

    escreva("\nTriângulo escaleno!\n")
  }
   


    
  }
}
