/*Os leões baios são animais territoriais.
 Seu território compreende cerca de 320km² por indivíduo,
 exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.
 Considerando que existam 9 fêmeas e 5 machos  em determinada reserva ambiental.
 Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo)
 existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.*/


 //Declarar variáveis
 let areaIndividual = 320, areaCasal = 400, areaTotal, areaTotalIndividual, areaTotalCasais
 let totalLeoes, quantidadeCasais, mediaCasal = 2, totalCasais
 let quantidadeFemeas, quantidadeMachos, quantidadeSolo


 //Entrada de dados
 quantidadeFemeas = Number(prompt('Digite a quantidade de fêmeas: '))
 quantidadeMachos = Number(prompt('Digite a quantidade de machos: '))
 quantidadeCasais = prompt('Digite a quantidade de casais')


 //Cálculos
 totalLeoes = quantidadeFemeas + quantidadeMachos
 totalCasais = quantidadeCasais * mediaCasal
 quantidadeSolo = totalLeoes - totalCasais
 areaTotalIndividual = quantidadeSolo * areaIndividual
 areaTotalCasais = quantidadeCasais * areaCasal
 areaTotal = areaTotalIndividual + areaTotalCasais


 //Saída de dados
 alert('Total de leões: ' + totalLeoes + '\nQuantidade de casais: ' + quantidadeCasais + '\nÁrea dominada: ' + areaTotal + 'km²')
