/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

//Declarar variáveis
let metasSemana = []

for(i = 0; i < 3; i++){

    metasSemana.push(prompt('Adicione uma meta para a semana:'))
}

if(metasSemana[1] != 'exercício físico'){

    metasSemana[1] = 'praticar esportes'
}
console.log(metasSemana)