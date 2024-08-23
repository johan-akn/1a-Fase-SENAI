/*Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia.
 Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto.
 Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário.
 Mostrar na tela o total a pagar.*/


//4 pessoas, 2 querem café, 3 dias
programa {
  funcao inicio() {
   
    //Declarar variáveis
    inteiro quantidadePessoas, quantidadeDiarias, quantidadeCafe
    real valorDiaria = 280, valorCafe = 15
    real totalDiaria, totalCafe, totalPagamento



    //Entrada de dados
    escreva("Digite a quantidade de pessoas: ")
    leia(quantidadePessoas)
    
    escreva("Digite a quantidade de diárias: ")
    leia(quantidadeDiarias)

    escreva("Quantas pessoas querem café: ")
    leia(quantidadeCafe)



    //Cálculos
   totalDiaria = quantidadeDiarias*valorDiaria
   totalCafe = quantidadeCafe*valorCafe*quantidadeDiarias
   totalPagamento = totalDiaria + totalCafe



   //Saída de dados

   escreva("\nValor total das diárias: R$", totalDiaria, "\n")

   escreva("Valor total do café: R$", totalCafe, "\n")

   escreva("Valor total de pagamento: R$", totalPagamento, "\n")


  }
}
