/*Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são
necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15
reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito
somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa.
 Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na
tela o total cobrado pelo passeio.*/


 //Declarar variáveis
 let mediaTempo = 5, mediaGas = 10, custoGas = 15, valorTaxa = 20
 let valorTempo, valorTotal, valorMinutoGas
 let quantidadePessoas, tempoPasseio


 //Entrada de dados
 quantidadePessoas = prompt('Quantas pessoas? (máximo 4) ')

 if(quantidadePessoas > 4){

    alert('Quantidade excessiva de pessoas!')

 }else{

    tempoPasseio = prompt('Qual o tempo do passeio? ')

 }


 //Cálculos
 quantidadeGas = mediaGas/mediaTempo //Gasto de gás por minuto
 valorMinutoGas = quantidadeGas*custoGas //Valor do gás por minuto
 valorTempo = tempoPasseio * valorMinutoGas //Valor total do tempo de passeio
 valorTaxa = quantidadePessoas * valorTaxa // Valor total da taxa
 valorTotal = valorTempo + valorTaxa //Valor total


 //Saída de dados

 alert('Valor do tempo do passeio: R$ ' + valorTempo + '\nValor da taxa: R$ '+ valorTaxa + '\nValor total: R$ ' + valorTotal)

