/*Fa�a um programa no qual o usu�rio digite a cor que est� no sem�foro (verde, amarelo, vermelho).
 Caso seja digitado verde, mostre na tela "Pode seguir!",
 se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".*/


programa {
  funcao inicio() {
    
  //Declarar vari�veis

  cadeia corFarol = ""


  //Entrada de dados

  escreva("Qual a cor do sem�foro? ")
  leia(corFarol)



  //Sa�da de dados

   se(corFarol == "verde"){

    escreva("\nPode seguir!\n")
  
  
  }senao se(corFarol == "amarelo"){

    escreva("\nAlerta, pare!\n")


  }senao se(corFarol == "vermelho"){

    escreva("\nPare imediatamente!\n")
  }









  }
}
