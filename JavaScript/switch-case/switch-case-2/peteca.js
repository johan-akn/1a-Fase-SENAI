/*Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca
 caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo.
 Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos)
 e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).*/


 //Declarar variáveis
 let arremessoUm, arremessoDois, arremessoTres
 let somaPontos


 //Entrada de dados
 arremessoUm = Number(prompt('Qual a pontuação do primeiro arremesso?'))
 arremessoDois = Number(prompt('Qual a pontuação do segundo arremesso?'))
 arremessoTres = Number(prompt('Qual a pontuação do terceiro arremesso?'))

 //Cálculo
 somaPontos = arremessoUm + arremessoDois + arremessoTres

 //Saída de dados
 switch(true){

    case somaPontos == 15:
        alert('Deus da peteca!')
        break;

    case somaPontos < 15 && somaPontos >= 10:
        alert('Petequeiro profissa!')
        break;

    case somaPontos < 10 && somaPontos >= 5:
        alert('Petequeiro de final de semana')
        break;

    case somaPontos < 5 && somaPontos >= 1:
        alert('Pseudo-Petequeiro')
        break;

    case somaPontos == 0:
        alert('Inimigo da peteca!')
        break;

    default:
        alert('Impossível')

    
 }