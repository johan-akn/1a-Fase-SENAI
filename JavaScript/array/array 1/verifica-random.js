numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1)) + 0;


/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

//Declarar variáveis
let listaNumeros = [], listaIndices = []
let numUsuario

for(random = 0; random<10; random++){

    listaNumeros.push(Math.floor(Math.random() * (10 - 0 + 1)) + 0)

    console.log(listaNumeros)
}

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
