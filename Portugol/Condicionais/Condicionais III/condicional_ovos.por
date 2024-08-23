/*Uma feira est� realizando promo��o na compra de ovos. Os ovos custam 40 centavos cada
 se forem comprados at� 12 (uma d�zia), 30 centavos cada se forem comprados de 13 a 24 
 (at� duas d�zias) e 25 centavos cada, caso sejam comprados mais que duas d�zias. (25+) 
 Fa�a um programa que leia o n�mero de ovos comprados, calcule e mostre na tela o valor total da compra.*/



programa {
  funcao inicio() {
    
  //Declarar vari�veis

  real ovoUnidade = 0.40
  real descontoUm = 0.10, descontoDois = 0.15
  real valorTotal
  inteiro ovosComprados
  inteiro duziaOvos = 12, duasDuzias = 24

  
  //Entrada de dados

  escreva("Digite o n�mero de ovos comprados: ")
  leia(ovosComprados)

  
  //C�lculos

  valorTotal = ovosComprados * ovoUnidade

 
  se(ovosComprados > duziaOvos e ovosComprados < duasDuzias){
    
    ovoUnidade = ovoUnidade - descontoUm
    valorTotal = ovosComprados * ovoUnidade

  }senao se(ovosComprados > duasDuzias ){

    ovoUnidade = ovoUnidade - descontoDois
    valorTotal = ovosComprados * ovoUnidade

  }senao{

    valorTotal = ovosComprados * ovoUnidade
  }


  //Sa�da de dados

  escreva("\nOvos comprados: ", ovosComprados, "\n")
  escreva("Valor total: R$", valorTotal, "\n")

  }
}
