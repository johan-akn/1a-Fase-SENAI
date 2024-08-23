/*5) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
 Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.
 (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)*/


 let nomeDigitado, idadeDigitada
 let mediaIdade, maiorNome, maiorIdade = 0
 let somaIdades = 0, relIdades = 5, cont = 0


 while(cont < 5){

    nomeDigitado = prompt('Digite o nome da pessoa')
    idadeDigitada = Number(prompt('Digite a idade da pessoa'))

    if(idadeDigitada > maiorIdade){

        maiorIdade = idadeDigitada
        maiorNome = nomeDigitado
    }  
    
    somaIdades += idadeDigitada

    cont++
 }

 //Calc média
 mediaIdade = somaIdades / relIdades


//Saída de dados
 alert('Média de idade: ' + mediaIdade + '\nMaior idade: ' + maiorIdade + '\nNome da pessoa com maior idade: ' + maiorNome)