/* Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro).
 Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.
*/

programa {
  funcao inicio() {
    
    //Declarar variáveis
   
    real totalDistancia, totalLitros
    real consumoKm

    //Entrada de dados

   escreva("Digite a distância percorrida: ")
  leia(totalDistancia)


  escreva("Digite o combutível consumido: ")
  leia(totalLitros)


  //Cálculos
  consumoKm = totalDistancia/totalLitros


  //Saída de dados
  escreva("\nConsumo de combustível por km: ",consumoKm, "Km/L")


  }
}
