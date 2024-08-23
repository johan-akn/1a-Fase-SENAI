/*4) Em uma competição de dardos, os competidores se classificam
 para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos.
 Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem.
 Menos que isso, é eliminado.
 Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão.
 Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor
 e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual)
 e se ele está classificado, se foi para a repescagem ou se está desclassificado.*/


 //Declarar variáveis
let pontosArremesso
let somaPontos = 0, cont = 0, numeroInvalido = false

//{

while(cont < 6){

    pontosArremesso = Number(prompt('Digite a pontuação do arremesso (1 a 10)'))

    if(pontosArremesso > 0 && pontosArremesso <= 10){

    somaPontos += pontosArremesso

    cont++
 }
else{
    
    numeroInvalido = true
    break

  }
}

//Cálculos
mediaPorcentagem = (somaPontos * 100) / 60

if(numeroInvalido == true){

    alert('Pontuação inválida! Tente novamente.')

}else if(mediaPorcentagem >= 75){

    alert('Desempenho: ' + mediaPorcentagem + '%' + '\n\nSituação: Classificado')

}else if(mediaPorcentagem >= 50 && mediaPorcentagem < 75){

    alert('Desempenho: ' + mediaPorcentagem + '%' + '\n\nSituação: Repescagem')

}else{

    alert('Desempenho: ' + mediaPorcentagem + '%' + '\n\nSituação: Desclassificado')

}
