/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

//Declarar variáveis
let carrinho = []

//Modificações
carrinho.push('camiseta')
carrinho.push('calça')
carrinho.push('sapato')

carrinho.shift()

carrinho[1] = 'tênis'

//Saída de dados
console.log(carrinho)
