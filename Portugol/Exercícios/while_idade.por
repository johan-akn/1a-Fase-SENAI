/*Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
 Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.
 (DESAFIO: Mostrar também o nome da pessoa com a maior idade).*/

programa {
  funcao inicio() {
    
  //Declarar variáveis

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

  //Cálculo

  mediaIdades = somaIdades / relacaoIdade


  //Saída de dados

  escreva("\nMédia de idade: ", mediaIdades, "\n")
  escreva("Maior idade: ", maiorIdade, "\n")
  escreva("Nome maior idade: ", maiorNome, "\n")


  }
}
