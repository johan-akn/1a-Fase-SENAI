/*7) Criar uma lista com 6 notas, ao final realizar a média das notas descartando a primeira e a última. Mostra na tela a média.*/

//Declarar variáveis
let listaNotas = [], quantidadeNotas = 6
let somaNotas = 0, mediaNotas, notaDigitada

for(i = 1; i<7; i++){

    notaDigitada = Number(prompt(`Digite a nota ${i}` ))

    listaNotas.push(notaDigitada)   

    if(i > 1 && i < 6){
        somaNotas += listaNotas[i]
    }
}

mediaNotas = somaNotas / quantidadeNotas

alert(`Média das notas: ${mediaNotas}`)