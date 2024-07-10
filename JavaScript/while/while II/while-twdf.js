/*3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP.
 Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

A) Ataque Bomba -100HP
B) Ataque Granada -80HP
C) Ataque Arqueiro -40HP
D) Defesa Escudo +20HP

Mostrar o HP do castelo atualizado a cada rodada.
Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!"*/

//{

//Declarar variáveis
let vidaTorre = 500, acaoUsuario
let cont = 0

alert('Bem vindo ao Tower Defense!')


while(vidaTorre > 0){

    acaoUsuario = prompt('Qual ação deseja realizar? \n\nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP\n\nVida da torre: '+ vidaTorre+ '\n\nAção:').toUpperCase()

    switch(acaoUsuario){

        case 'A':
            vidaTorre -= 100
            break;

        case 'B':
            vidaTorre -= 80
            break;

        case 'C':
            vidaTorre -= 40
            break;

        case 'D':
            vidaTorre += 20
            break;

    }

    cont++

}

alert('Jogo encerrado com ' + cont +  ' rodadas.')