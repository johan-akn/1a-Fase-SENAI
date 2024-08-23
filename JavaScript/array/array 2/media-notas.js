/*7) Criar uma lista com 6 notas, ao final realizar a média das notas descartando a primeira e a última. Mostra na tela a média.*/

//Declarar variáveis
let listaNotas = [], mediaQuatro = 4
let somaNotas = 0, mediaNotas, notaDigitada

for(i = 1; i<7; i++){

    notaDigitada = Number(prompt(`Digite a nota ${i}` ))

    if(i > 1 && i < 6){
        somaNotas += notaDigitada        
    }
    listaNotas.push(notaDigitada)   
}

mediaNotas = somaNotas / mediaQuatro

alert(`Notas: ${listaNotas} \nMédia das notas: ${mediaNotas}`)