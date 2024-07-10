/*Você é um amante da natureza e adora fazer trilhas.
 Criar um programa que calcule a velocidade média das trilhas que você realiza.
 Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas).
 Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.*/


 //Declarar variáveis
 let distanciaTrilha, tempoTrilha, velocidadeMedia


 //Entrada de dados

 distanciaTrilha = prompt('Digite a distância percorrida (em km): ')
 tempoTrilha = prompt('Quanto tempo demorou? (em horas) ')

 //Cálculo
 velocidadeMedia = distanciaTrilha / tempoTrilha


 //Saída de dados
 alert('Sua média de velocidade durante essa trilha foi de ' + velocidadeMedia + 'km/h, sendo ' + velocidadeMedia + ' a velocidade média.')