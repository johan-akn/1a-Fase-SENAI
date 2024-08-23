/*4) Um festival de balonismo oferece passeios de bal�o.
Para cada 5 minutos de voo, s�o necess�rios 10m� (metros c�bicos) de g�s, sendo que o metro c�bico de g�s custa (R$)15 reais. 
No bal�o cabem no m�ximo 4 pessoas.
O c�lculo do valor do passeio � feito somando o valor gasto em g�s, mais uma taxa de (R$)20 reais por pessoa. 
Criar um programa que pergunte quantas pessoas v�o no passeio e o tempo de passeio.
Mostrar na tela o total cobrado pelo passeio*/


programa {
  funcao inicio() {
    
    //Declarar vari�veis

    inteiro mediaTempo = 5, mediaGas = 10, custoGasMetroCubico = 15,  taxaPasseio = 20
    inteiro pessoasPasseio, valorTaxaPessoas, valorTempo, valorTotalPasseio, quantidadeGasPorMinuto
    real tempoPasseio, valorMinutoMetroCubico

    
    //Entrada de dados

    escreva("Quantas pessoas v�o no passeio? ")
    leia(pessoasPasseio)

    escreva("Qual o tempo do passeio? ")
    leia(tempoPasseio)

    //C�lculos
    
    quantidadeGasPorMinuto = mediaGas/mediaTempo
    valorMinutoMetroCubico = quantidadeGasPorMinuto*custoGasMetroCubico
    valorTempo = tempoPasseio * valorMinutoMetroCubico
    valorTaxaPessoas = pessoasPasseio * taxaPasseio
    valorTotalPasseio = valorTempo + valorTaxaPessoas

    //Sa�da de dados
    
    escreva("\nValor do tempo de passeio: (R$)", valorTempo, "\n")

    escreva("Valor da taxa do passeio: (R$)", valorTaxaPessoas, "\n")

    escreva("Valor total do passeio: (R$)", valorTotalPasseio, "\n")

  }
}
