/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

//Declarar variáveis
let listaNumeros = [0, 1, 2, 2, 2, 2, 3, 4, 3, 6]
let numUsuario, listaIndices = []

numUsuario = Number(prompt('Qual número deseja verificar?'))

let contem = listaNumeros.includes(numUsuario)

for(i = 0; i < listaNumeros.length; i++){

    if(listaNumeros[i] === numUsuario){

        listaIndices.push(i)
    }
}

if(contem == true){

  
    console.log('O número digitado se encontra no(s) índice(s) ' + listaIndices + '.')

}
else{
    console.log('O número digitado não está na lista :<')
}
