/*Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada
 se forem comprados até 12 (uma dúzia), 30 centavos cada se forem comprados de 13 a 24 
 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. (25+) 
 Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.*/



programa {
  funcao inicio() {
    
  //Declarar variáveis

  real ovoUnidade = 0.40
  real descontoUm = 0.10, descontoDois = 0.15
  real valorTotal
  inteiro ovosComprados
  inteiro duziaOvos = 12, duasDuzias = 24

  
  //Entrada de dados

  escreva("Digite o número de ovos comprados: ")
  leia(ovosComprados)

  
  //Cálculos

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


  //Saída de dados

  escreva("\nOvos comprados: ", ovosComprados, "\n")
  escreva("Valor total: R$", valorTotal, "\n")

  }
}
