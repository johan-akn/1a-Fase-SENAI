/*Uma pousada cobra R$280 reais a di�ria por quarto e R$15 reais o caf� por pessoa por dia.
 Voc� pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficar�o no mesmo quarto.
 Informar a quantidade de pessoas, o n�mero de di�rias e quantas pessoas do grupo v�o querer caf� di�rio.
 Mostrar na tela o total a pagar.*/


//4 pessoas, 2 querem caf�, 3 dias
programa {
  funcao inicio() {
   
    //Declarar vari�veis
    inteiro quantidadePessoas, quantidadeDiarias, quantidadeCafe
    real valorDiaria = 280, valorCafe = 15
    real totalDiaria, totalCafe, totalPagamento



    //Entrada de dados
    escreva("Digite a quantidade de pessoas: ")
    leia(quantidadePessoas)
    
    escreva("Digite a quantidade de di�rias: ")
    leia(quantidadeDiarias)

    escreva("Quantas pessoas querem caf�: ")
    leia(quantidadeCafe)



    //C�lculos
   totalDiaria = quantidadeDiarias*valorDiaria
   totalCafe = quantidadeCafe*valorCafe*quantidadeDiarias
   totalPagamento = totalDiaria + totalCafe



   //Sa�da de dados

   escreva("\nValor total das di�rias: R$", totalDiaria, "\n")

   escreva("Valor total do caf�: R$", totalCafe, "\n")

   escreva("Valor total de pagamento: R$", totalPagamento, "\n")


  }
}
