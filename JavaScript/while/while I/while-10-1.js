/*4) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida.
 Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
 Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente". (PESQUISA: comando pare)*/


 let numeroDigitado
 let cont = 10


alert('Digite uma sequência invertida de 10 a 1!')

 while(cont > 0){

     numeroDigitado = Number(prompt('Digite o número da sequência'))

     if(numeroDigitado != cont){

        break
     }

     cont--

    }

 if(cont == 0){

      alert('Parabéns! Você terminou a sequência corretamente.')

}
else{

   alert('Você errou a sequência!')
}