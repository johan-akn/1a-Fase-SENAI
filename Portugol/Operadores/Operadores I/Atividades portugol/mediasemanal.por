/*Um(a) programador(a) deseja, ao final do m�s, saber quantas horas por semana em m�dia estudou programa��o.
 Crie um programa no qual seja digitado a quantidade de horas de cada semana do m�s e no final mostre a m�dia de horas por semana naquele m�s.*/

programa {
  funcao inicio() {
    
    //Declarar vari�veis

    real semanaUm, semanaDois, semanaTres, semanaQuatro
    real mediaSemanal, totalSemanal
    inteiro quantidadeSemanas = 4
    //Entrada de dados
    escreva("Digite a quantidade de horas da primeira semana: ")
    leia(semanaUm)


    escreva("Digite a quantidade de horas da segunda semana: ")
    leia(semanaDois)


    escreva("Digite a quantidade de horas da terceira semana: ")
    leia(semanaTres)


    escreva("Digite a quantidade de horas da quarta semana: ")
    leia(semanaQuatro)


    //C�lculos
    totalSemanal = semanaUm + semanaDois + semanaTres + semanaQuatro
    mediaSemanal = totalSemanal/quantidadeSemanas
   
   
    //Sa�da de dados
    escreva("\nTotal do M�s: ", totalSemanal, " Horas", "\n")
    escreva("M�dia Semanal: ", mediaSemanal, " Horas", "\n")
  }
}
