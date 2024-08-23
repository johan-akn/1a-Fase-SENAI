/* Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a).
Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.*/


programa {
  funcao inicio() {
   
    //Declarar variáveis
    inteiro bombomProfessor = 1
    inteiro bombonsAlunos = 2
    inteiro bombonsTotal
    inteiro alunosTurma

    
    //Entrada de dados

    escreva("Digite a quantidade de alunos: ")
  leia(alunosTurma)


  //Cálculos

  bombonsTotal = alunosTurma * bombonsAlunos + bombomProfessor
 

  //Saída de dados

  escreva("\nTotal de bombons: ", bombonsTotal, "\n")
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  }
}
