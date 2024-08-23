/*2) Cria um programa onde o usuário digite 5 números inteiros.
 Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.*/

 //Declarar variáveis
 let numeroDigitado
 let listaImpares = []
 let somaImpares = 0

 for(i = 0; i<5; i++){

    numeroDigitado = Number(prompt('Digite um número'))

    if(numeroDigitado % 2 !== 0){

        listaImpares.push(numeroDigitado)
        somaImpares += numeroDigitado
    }
 }

 alert(`Lista do números ímpares: ${listaImpares} \nSoma dos ímpares: ${somaImpares}`)