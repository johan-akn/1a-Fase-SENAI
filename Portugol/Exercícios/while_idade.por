/*Desenvolva um programa no qual o usu�rio deve digitar o nome e a idade de 5 pessoas.
 Ao final mostrar a m�dia de idade delas e a maior idade dentre essas pessoas.
 (DESAFIO: Mostrar tamb�m o nome da pessoa com a maior idade).*/

programa {
  funcao inicio() {
    
  //Declarar vari�veis

  cadeia nomePessoa, maiorNome
	inteiro idadeDigitada, contador = 0
	inteiro somaIdades = 0, maiorIdade = 0, relacaoIdade = 5
	real mediaIdades



  enquanto(contador < 5){

  escreva("\nDigite seu nome: ")
  leia(nomePessoa)
  escreva("Digite sua idade: ")
  leia(idadeDigitada)

  

  se(idadeDigitada > maiorIdade){


      maiorIdade = idadeDigitada
      maiorNome = nomePessoa

  }


   somaIdades = somaIdades + idadeDigitada

   contador ++
  }

  //C�lculo

  mediaIdades = somaIdades / relacaoIdade


  //Sa�da de dados

  escreva("\nM�dia de idade: ", mediaIdades, "\n")
  escreva("Maior idade: ", maiorIdade, "\n")
  escreva("Nome maior idade: ", maiorNome, "\n")


  }
}
