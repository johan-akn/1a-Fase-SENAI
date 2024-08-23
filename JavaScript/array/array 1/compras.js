/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/


//Declarar variáveis
let listaCompras = []

alert('Adicione 3 itens à sua lista de compras!')

for(i = 0; i < 3; i++){

    listaCompras.push(prompt('Adicione um item:').toLowerCase())
}

console.log(listaCompras)

if(listaCompras[2] != 'leite'){

    listaCompras.push('leite')
}

console.log(listaCompras)