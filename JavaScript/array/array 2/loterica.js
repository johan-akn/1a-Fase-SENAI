/*6) Fazer um programa que simule uma fila de lotérica. Começa vazia, escolhe A) Entrou pessoa B) Saiu pessoa. Se a fila acumular 5 pessoas, finaliza. */

//Declarar variáveis
let acaoUsuario, filaLoterica = []


do{
    acaoUsuario = prompt(`A) Entrou uma pessoa \nB) Saiu uma pessoa  \n\nTamanho da fila: ${filaLoterica.length}`).toUpperCase()

    switch(acaoUsuario){

        case 'A':
            filaLoterica.push(1)
            break;

        case 'B':
            filaLoterica.pop()
            break;
        }


}while(filaLoterica.length < 5)

alert('A fila atingiu o máximo de pessoas! (5)')