/* Desenvolver um programa que realize o c�lculo de consumo de combust�vel por quilometragem, para ve�culos (km por litro).
 Para isso, devem ser digitados os dados de dist�ncia total percorrida (km) e total de combust�vel gasto (litros), mostrando o resultado ao final.
*/

programa {
  funcao inicio() {
    
    //Declarar vari�veis
   
    real totalDistancia, totalLitros
    real consumoKm

    //Entrada de dados

   escreva("Digite a dist�ncia percorrida: ")
  leia(totalDistancia)


  escreva("Digite o combut�vel consumido: ")
  leia(totalLitros)


  //C�lculos
  consumoKm = totalDistancia/totalLitros


  //Sa�da de dados
  escreva("\nConsumo de combust�vel por km: ",consumoKm, "Km/L")


  }
}
