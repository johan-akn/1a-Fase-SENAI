
/* Fa�a um programa para ler o sal�rio anual de um funcion�rio e o piso salarial mensal da sua categoria.
 Mostrar o sal�rio mensal do funcion�rio e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso.*/


programa {
  funcao inicio() {
    
  //Declarar vari�veis
  
  real salarioAnual, salarioMensal, pisoSalarial 
  inteiro mediaAno = 12


  escreva("Digite seu piso salarial: (R$)")
  leia(pisoSalarial)

  escreva("Digite seu sal�rio anual: (R$)")
  leia(salarioAnual)
  
  
  //C�lculo
  salarioMensal = salarioAnual/mediaAno


  //Sa�da de dados

  escreva("\nSal�rio mensal: (R$)", salarioMensal,"\n")

  se(salarioMensal >= pisoSalarial){

     escreva("Sal�rio de acordo com o piso!")

  
  }senao{

      escreva("Sal�rio abaixo do piso!")

  }

     



  }


  }
}
