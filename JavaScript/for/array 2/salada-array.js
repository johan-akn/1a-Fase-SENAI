/*4) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final.
 Deve ser perguntado em sequência “Qual fruta adicionar?”.
 Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.*/

//Declarar variáveis
let listaSalada = [], frutaDigitada

 alert('Vamos começar a fazer sua salada de frutas!')

 do{

    frutaDigitada = prompt('Qual fruta deseja adicionar?')

    listaSalada.push(` ${frutaDigitada}`)


 }while(frutaDigitada !== 'cereja')

 alert(`Salada de frutas: ${listaSalada}`)