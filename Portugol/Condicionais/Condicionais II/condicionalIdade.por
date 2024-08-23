
/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
 Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.
 (DESAFIO: Mostrar também o nome da pessoa com a maior idade).*/

programa {
  funcao inicio() {
    

//Declarar variáveis

cadeia nomeUm, nomeDois, nomeTres, nomeQuatro, nomeCinco
cadeia nomeMaiorIdade = ""
inteiro idadeDigitada, maiorIdade = 0
inteiro somaIdades = 0, relIdades = 5
real mediaIdades


//Entrada de dados

escreva("Digite o nome da primeira pessoa: ")
 leia(nomeUm)

escreva("Idade: ")
 leia(idadeDigitada)


somaIdades = somaIdades + idadeDigitada

  se(idadeDigitada > maiorIdade){

     maiorIdade = idadeDigitada
     nomeMaiorIdade = nomeUm

    }

escreva("\nDigite o nome da segunda pessoa: ")
 leia(nomeDois)
 
escreva("Idade: ")
 leia(idadeDigitada)


somaIdades = somaIdades + idadeDigitada

se(idadeDigitada > maiorIdade){

     maiorIdade = idadeDigitada
     nomeMaiorIdade = nomeDois

    }


escreva("\nDigite o nome da terceira pessoa: ")
 leia(nomeTres)
 
escreva("Idade: ")
 leia(idadeDigitada)
 

somaIdades = somaIdades + idadeDigitada

se(idadeDigitada > maiorIdade){

     maiorIdade = idadeDigitada
     nomeMaiorIdade = nomeTres

    }


escreva("\nDigite o nome da quarta pessoa: ")
 leia(nomeQuatro)
 
escreva("Idade: ")
 leia(idadeDigitada)


somaIdades = somaIdades + idadeDigitada

se(idadeDigitada > maiorIdade){

     maiorIdade = idadeDigitada
     nomeMaiorIdade = nomeQuatro

    }


escreva("\nDigite o nome da quinta pessoa: ")
 leia(nomeCinco)
 
escreva("Idade: ")
 leia(idadeDigitada)
 

somaIdades = somaIdades + idadeDigitada

se(idadeDigitada > maiorIdade){

     maiorIdade = idadeDigitada
     nomeMaiorIdade = nomeCinco

    }


 //Cálculos
 
 mediaIdades = somaIdades / relIdades
 

 //Saída de dados

 escreva("\nMédia de idade: ", mediaIdades, "\n")
 
 escreva("Maior idade: ", maiorIdade, "\n")
 
 escreva("Pessoa mais velha: ", nomeMaiorIdade, "\n")
 
 
 
  }
}
