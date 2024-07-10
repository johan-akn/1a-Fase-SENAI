/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente       D) Sair*/

//Declarar variáveis
let acaoUsuario


//Entrada de dados
acaoUsuario = prompt('Qual ação deseja realizar? \n\nA) Falar com a atendente\nB) Falar com o RH \nC) Falar com o gerente \nD) Sair').toUpperCase()


//Saída de dados
switch(acaoUsuario){

    case 'A':
        alert('Você escolheu falar com a atendente.')
        break;

    case 'B':
        alert('Você escolheu falar com o RH.')
        break;

    case 'C':
        alert('Você escolheu falar com o gerente.')
        break;

    case 'D':
        alert('Você escolheu sair.')
        break;

    default:
        alert('Ação inválida!')

}