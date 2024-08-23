/*5) O acampamento base sul do Everest fica a cerca de 5.360m de altura.
 A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar.
 Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia.
 Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”.
 Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.*/

 //Declarar variáveis
 let alturaBase = 5360, alturaCume = 8848
 let alturaDia, contDias = 0, limiteDias = false


 do{
     
    if(contDias < 8){

        alturaDia = Number(prompt('Qual a altitude percorrida hoje?'))

        alturaBase += alturaDia
    }
    else{
        limiteDias = true
        break
    }

    contDias++

 }while(alturaBase < alturaCume)

 if(limiteDias == true){

    alert('Você deve voltar, pois corre risco de ficar sem oxigênio')
 }
 else{

     alert('Parabéns! Você chegou ao cume em ' + contDias + ' dias.')
 }