/*Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação.
 Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.*/

programa {
  funcao inicio() {
    
    //Declarar variáveis

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


    //Cálculos
    totalSemanal = semanaUm + semanaDois + semanaTres + semanaQuatro
    mediaSemanal = totalSemanal/quantidadeSemanas
   
   
    //Saída de dados
    escreva("\nTotal do Mês: ", totalSemanal, " Horas", "\n")
    escreva("Média Semanal: ", mediaSemanal, " Horas", "\n")
  }
}
