/* Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar
 e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação.
 Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais,
  exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.*/



  let numeroMultas, somaPontos, somaMultas
  let contadorMultas = 0, mediaRegular = 21


  numeroMultas = prompt('Quantas multas deseja cadastrar?')

  while(numeroMultas > contadorMultas){

    somaMultas = Number(prompt('Digite o valor da multa.'))
    somaPontos = Number(prompt('Digite os pontos perdidos.'))

    somaMultas += somaMultas
    somaPontos += somaPontos

    contadorMultas++

  }

  alert('Soma dos valores das multas: R$' + somaMultas + '\nPontos perdidos: ' + somaPontos)

  if(somaPontos < 21){

    alert('Você está regular!')

  }
  else{

    alert('Você está irregular!')
  }