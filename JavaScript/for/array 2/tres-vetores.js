/*3) Escreva um programa no qual o usuário digite dois vetores com 3 elementos cada (primeiro os elementos de um, depois os de outro)
 e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.
 Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.*/

 //Declarar variáveis
 let vetorUm = [], vetorDois = []
 let vetorTres = [], numeroDigitado

 for(i = 0; i<6; i++){

    numeroDigitado = Number(prompt('Digite um número'))

    if(i < 3){

        vetorUm.push(numeroDigitado)

    }else if(i >= 3){

        vetorDois.push(numeroDigitado)
    }
 }

 for(i = 0; i<3; i++){

    vetorTres.push(vetorUm[i])
    vetorTres.push(vetorDois[i])

 }

 alert(`Vetor um : ${vetorUm} \nVetor dois: ${vetorDois} \nVetor três: ${vetorTres}`)
