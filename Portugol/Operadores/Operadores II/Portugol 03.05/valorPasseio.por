/*4) Um festival de balonismo oferece passeios de balão.
Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa (R$)15 reais. 
No balão cabem no máximo 4 pessoas.
O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de (R$)20 reais por pessoa. 
Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio.
Mostrar na tela o total cobrado pelo passeio*/


programa {
  funcao inicio() {
    
    //Declarar variáveis

    inteiro mediaTempo = 5, mediaGas = 10, custoGasMetroCubico = 15,  taxaPasseio = 20
    inteiro pessoasPasseio, valorTaxaPessoas, valorTempo, valorTotalPasseio, quantidadeGasPorMinuto
    real tempoPasseio, valorMinutoMetroCubico

    
    //Entrada de dados

    escreva("Quantas pessoas vão no passeio? ")
    leia(pessoasPasseio)

    escreva("Qual o tempo do passeio? ")
    leia(tempoPasseio)

    //Cálculos
    
    quantidadeGasPorMinuto = mediaGas/mediaTempo
    valorMinutoMetroCubico = quantidadeGasPorMinuto*custoGasMetroCubico
    valorTempo = tempoPasseio * valorMinutoMetroCubico
    valorTaxaPessoas = pessoasPasseio * taxaPasseio
    valorTotalPasseio = valorTempo + valorTaxaPessoas

    //Saída de dados
    
    escreva("\nValor do tempo de passeio: (R$)", valorTempo, "\n")

    escreva("Valor da taxa do passeio: (R$)", valorTaxaPessoas, "\n")

    escreva("Valor total do passeio: (R$)", valorTotalPasseio, "\n")

  }
}
