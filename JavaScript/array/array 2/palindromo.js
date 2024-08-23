/*9) Palíndromo é aquele elemento que, se lido de trás para frente e de frente para trás, é o mesmo.
 Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo.
 (DESAFIO: fazer com 7 números e com palavras. Pesquisar o método de string splitovo que é muito legalzão).*/


 //Declarar variáveis
 let listaNumeros = [], numeroDigitado
 let j = 6, vetorPalindromo = true

 for(i = 0; i<7; i++){

    numeroDigitado = Number(prompt('Digite um número'))

    listaNumeros.push(numeroDigitado)
 }

 console.log(listaNumeros)

 for(i = 0; i<7; i++){

    if(listaNumeros [i] != listaNumeros[j]){

        vetorPalindromo = false
    }

    j--
 }

 if(vetorPalindromo){

    alert('O vetor é um palíndromo!')
}
else{

    alert('O vetor não é um palíndromo :<')
}
 
