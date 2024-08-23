/*6) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles.
 Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.*/


 //Declarar variáveis
 let numeroDigitado, mediaNumeros = 0
 let contemImpar = false, cont = 0

 while(cont<5){
    numeroDigitado = Number(prompt('Digite um número par:'))

    if(numeroDigitado % 2 == 0){

        mediaNumeros += numeroDigitado
    }
    else{
        
        contemImpar = true
        break
    }

    cont++
 }


//Cálculo
 mediaNumeros = mediaNumeros / 5

//Saída de dados
if(contemImpar == true){

    alert('Um dos números digitados era ímpar.')
}
else{
    
    alert('Média dos números: ' + mediaNumeros)
}