/*1) Elabore um programa que leia tr�s lados de um tri�ngulo e mostre na tela se ele � equil�tero, is�sceles ou escaleno. 
Quando os tr�s lados forem iguais trata-se de um tri�ngulo equil�tero, dois lados iguais � um tri�ngulo is�sceles e os tr�s
lados diferentes � um tri�ngulo escaleno.*/


programa {
  funcao inicio() {

  //Declarar vari�veis

  inteiro ladoUm, ladoDois, ladoTres


  //Entrada de dados

  escreva("Digite o valor do primeiro lado: ")
  leia(ladoUm)

  escreva("Digite o valor do segundo lado: ")
  leia(ladoDois)

  escreva("Digite o valor terceiro lado: ")
  leia(ladoTres)


  //Sa�da de dados

  se(ladoUm == ladoDois e ladoUm == ladoTres e ladoDois == ladoTres){

    escreva("\nTri�ngulo equil�tero!\n")
  
  }senao se(ladoUm == ladoDois ou ladoUm == ladoTres ou ladoDois == ladoTres){

    escreva("\nTri�ngulo is�celes!\n")

  }senao{

    escreva("\nTri�ngulo escaleno!\n")
  }
   


    
  }
}
