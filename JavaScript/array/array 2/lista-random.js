/*5) Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20.
 Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos)*/

 //Declarar variáveis
 let randomNumbers = [], contemNumero = false
 let numeroAleatorio

 for(i = 0; i<10; i++){

    numeroAleatorio = (Math.floor(Math.random() * (20 - 0 + 1)) + 0)
    contemNumero = randomNumbers.includes(numeroAleatorio)
    
    if(contemNumero == false){
        
        randomNumbers.push(numeroAleatorio)

    }else {

        i--  
    }
 }
 alert(`Lista do vetor: ${randomNumbers}`)