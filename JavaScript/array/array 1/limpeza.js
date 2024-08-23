/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

//Declarar variáveis
let tarefasLimpeza = []

for(i = 0; i < 4; i++){

    tarefasLimpeza.push(prompt('Adicione uma tarefa de limpeza:'))
}

tarefasLimpeza.splice(2,1)
tarefasLimpeza[1] = 'limpar banheiro'

console.log(tarefasLimpeza)