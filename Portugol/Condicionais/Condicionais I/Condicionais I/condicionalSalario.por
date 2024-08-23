
/* Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria.
 Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso.*/


programa {
  funcao inicio() {
    
  //Declarar variáveis
  
  real salarioAnual, salarioMensal, pisoSalarial 
  inteiro mediaAno = 12


  escreva("Digite seu piso salarial: (R$)")
  leia(pisoSalarial)

  escreva("Digite seu salário anual: (R$)")
  leia(salarioAnual)
  
  
  //Cálculo
  salarioMensal = salarioAnual/mediaAno


  //Saída de dados

  escreva("\nSalário mensal: (R$)", salarioMensal,"\n")

  se(salarioMensal >= pisoSalarial){

     escreva("Salário de acordo com o piso!")

  
  }senao{

      escreva("Salário abaixo do piso!")

  }

     



  }


  }
}
