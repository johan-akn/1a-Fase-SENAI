
/* Faï¿½a um programa para ler o salï¿½rio anual de um funcionï¿½rio e o piso salarial mensal da sua categoria.
 Mostrar o salï¿½rio mensal do funcionï¿½rio e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso.*/


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


  se(salarioMensal > pisoSalarial){

     escreva("Salário de acordo com o piso!")

  
  }senao se(salarioMensal == pisoSalarial){

      escreva("Salário exatamente igual ao piso!")


  }senao{
  	
  	  escreva("Salário abaixo do piso!")
 
 
 
 
  

     



  }

}
  
}
