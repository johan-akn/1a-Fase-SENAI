//Declarar variáveis
let qntdJogadores
let rodadaUm, rodadaDois, rodadaTres, rodadaQuatro
let jogadorVencedor, somaPontos = 0, somaVencedor = 0


qntdJogadores = Number(prompt('Digite a quantidade de jogadores'))

for(i = 1; i <= qntdJogadores; i++){

    rodadaUm = Number(prompt('Digite o valor da primeira jogada (1 a 20):'))

        while(rodadaUm < 1 || rodadaUm > 20){
            
            alert('Valor inválido!')
            rodadaUm = Number(prompt('Digite o valor da primeira jogada (1 a 20):'))
    }
    rodadaDois = Number(prompt('Digite o valor da segunda jogada (1 a 20):'))

        
        while(rodadaDois < 1 || rodadaDois > 20){
            
            alert('Valor inválido!')
            rodadaDois = Number(prompt('Digite o valor da segunda jogada (1 a 20):'))
    }

    rodadaTres = Number(prompt('Digite o valor da terceira jogada (1 a 20):'))

    
        while(rodadaTres < 1 || rodadaTres > 20){
            
            alert('Valor inválido!')
            rodadaTres = Number(prompt('Digite o valor da terceira jogada (1 a 20):'))
    }
    rodadaQuatro = Number(prompt('Digite o valor da quarta jogada (1 a 20):'))

    
        while(rodadaQuatro < 1 || rodadaQuatro > 20){
            
            alert('Valor inválido!')
            rodadaQuatro = Number(prompt('Digite o valor da quarta jogada (1 a 20):'))
    }

    somaPontos = rodadaDois + rodadaQuatro

    if(somaPontos > somaVencedor){

        somaVencedor = somaPontos
        jogadorVencedor = i

    }
}

alert('Jogador ' + jogadorVencedor + ' venceu com uma soma de ' + somaVencedor + ' pontos.')