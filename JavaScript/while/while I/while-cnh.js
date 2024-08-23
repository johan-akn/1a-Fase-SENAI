/* Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar
 e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação.
 Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais,
  exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.*/



  let numeroMultas, pontosMulta, valorMulta
  let somaPontos = 0, somaMultas = 0
  let contadorMultas = 0, mediaRegular = 21


  numeroMultas = prompt('Quantas multas deseja cadastrar?')

  while(numeroMultas > contadorMultas){

    valorMulta = Number(prompt('Digite o valor da multa ' + (contadorMultas + 1) + ':'))
    pontosMulta = Number(prompt('Digite os pontos da multa ' + (contadorMultas + 1)+ ':'))

    somaMultas += valorMulta
    somaPontos += pontosMulta

    contadorMultas++

  }

  alert('Soma dos valores das multas: R$' + somaMultas + '\nPontos perdidos: ' + somaPontos)

  if(somaPontos < 21){

    alert('Você está regular!')

  }
  else{

    alert('Você está irregular!')
  }