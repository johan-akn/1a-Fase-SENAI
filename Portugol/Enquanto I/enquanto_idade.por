/*Jo�ozinho mede 1,75m de altura e cresce 1 cm por ano,
 enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano.
Fa�a um programa que calcule e mostre em quantos anos Pedrinho ser� mais alto que Jo�ozinho.*/

  programa {
  funcao inicio() {

    //Declarar vari�veis

    real alturaJoaozinho = 1.75, alturaPedrinho = 1.60
    real ganhoJoaozinho = 0.01, ganhoPedrinho = 0.03
    inteiro contadorAno = 0, anoMedia = 1



    enquanto(alturaPedrinho < alturaJoaozinho){

      alturaJoaozinho = alturaJoaozinho + ganhoJoaozinho
      alturaPedrinho = alturaPedrinho + ganhoPedrinho
      contadorAno = contadorAno + anoMedia


    }escreva("\nPedrinho levou ", contadorAno, " anos para ultrapassar Joaozinho\n")
    
  }
}
