/*Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho).
 Caso seja digitado verde, mostre na tela "Pode seguir!",
 se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".*/


programa {
  funcao inicio() {
    
  //Declarar variáveis

  cadeia corFarol = ""


  //Entrada de dados

  escreva("Qual a cor do semáforo? ")
  leia(corFarol)



  //Saída de dados

   se(corFarol == "verde"){

    escreva("\nPode seguir!\n")
  
  
  }senao se(corFarol == "amarelo"){

    escreva("\nAlerta, pare!\n")


  }senao se(corFarol == "vermelho"){

    escreva("\nPare imediatamente!\n")
  }









  }
}
