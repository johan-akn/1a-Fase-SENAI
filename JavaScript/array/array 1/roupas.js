/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/


//Declarar variáveis
let array = ['camiseta', 'calça', 'sapato']

array.push('meia')
array.shift()
array[1] = 'bermuda'

console.log(array)