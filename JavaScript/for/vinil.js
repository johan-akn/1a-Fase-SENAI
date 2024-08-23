/*8) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros.
 Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, repetidamente.
 Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:

 a) O total gasto em reais dos vinis.
 b) O valor que sobrou em dinheiro.
 c) Quantos vinis foram comprados.
 d) A média de preço dos vinis.
 e) O vinil mais caro e o mais barato.*/


 //Declarar variáveis
 let nomeVinil, listaVinis, mediaVinis
 let valorCarteira = 200, valorVinil
 let valorGasto = 0, contVinis = 0
 let nomeVinilMaisCaro = '', nomeVinilMaisBarato = ''
 let valorVinilMaisCaro = 0, valorVinilMaisBarato = 200

 do{
    nomeVinil = prompt('Digite o nome do vinil:')
    valorVinil = Number(prompt('Digite o valor do vinil ' + nomeVinil +  ':'))

    valorCarteira -= valorVinil
    
    if(valorCarteira >= 0){

        listaVinis += '\n' + nomeVinil
        valorGasto += valorVinil
        contVinis++
    }
    else{
        valorCarteira += valorVinil
        break
    }

    if(valorVinil > valorVinilMaisCaro){

        nomeVinilMaisCaro = nomeVinil
        valorVinilMaisCaro = valorVinil
    }
    if(valorVinil < valorVinilMaisBarato){

        nomeVinilMaisBarato = nomeVinil
        valorVinilMaisBarato = valorVinil
    }
    
 }while(valorCarteira > 0)

 mediaVinis = valorGasto / contVinis

 console.log('Valor total gasto: R$' + valorGasto + '\nValor que sobrou: R$' + valorCarteira + '\nQuantos vinis foram comprados: ' + contVinis + '\nMédia de preço dos vinis: ' + mediaVinis + '\n\nVinil mais caro: ' + nomeVinilMaisCaro + '\nValor: R$' + valorVinilMaisCaro + '\n\nVinil mais barato: ' + nomeVinilMaisBarato + '\nValor: R$' + valorVinilMaisBarato)