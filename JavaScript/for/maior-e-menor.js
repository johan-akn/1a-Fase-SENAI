/*4) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50.
 Ao final deve mostrar o maior número digitado e o menor número digitado.
 Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.*/

 //Declarar variáveis
 let numeroDigitado, maiorNumero = 0, menorNumero = 50

 for(i = 0; i<10; i++){

    numeroDigitado = Number(prompt('Digite um número de 0 a 50:'))

    if(numeroDigitado >= 0 && numeroDigitado <= 50){

        
        switch(true){
            
            case numeroDigitado < menorNumero:
                menorNumero = numeroDigitado
                break;
                
             case numeroDigitado > maiorNumero:
                maiorNumero = numeroDigitado
                break;
            }
    }
    else{

        alert('Numero digitado esta fora dos parâmetros!')
    }

 }

 alert('Maior número: ' + maiorNumero + '\nMenor número: ' + menorNumero)