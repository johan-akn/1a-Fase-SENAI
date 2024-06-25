/*Criar um programa que recebe o peso (kg) de um objeto no planeta Terra.
 Em seguida, apresentar a lista abaixo e pedir ao usuário para digitar o número desejado para escolher outros lugares do sistema solar.
 Ao final mostrar, o peso desse objeto no lugar selecionado.
 Lista de locais (lua e planetas) e gravidades relativas à Terra:

1 - 0,06 Plutão
2 - 0,17 Lua
3 - 0,38 Mercúrio
4 - 0,38 Marte
5 - 0,91 Vênus
6 - 0,92 Urano
7 - 1,06 Saturno
8 - 1,19 Netuno
9 - 2,34 Júpiter*/


//Declarar variáveis
let pesoTerra, pesoFinal
let planetaSelecionado


//Entrada de dados
pesoTerra = prompt('Digite o peso (kg) de um objeto na terra:')

planetaSelecionado = Number(prompt('Selecione um local (lua ou planeta) e veja o peso do objeto digitado no respectivo local:\n\n 1 - Plutão\n 2 - Lua\n 3 - Mercúrio\n 4 - Marte\n 5 - Vênus \n 6 - Urano\n 7 - Saturno\n 8 - Netuno\n 9 - Júpiter\n\nEscolha:'))


//Saída de dados
switch(planetaSelecionado){

    case 1:
        pesoFinal = pesoTerra * 0.06
        alert('Peso em Plutão: ' + pesoFinal + 'kg')
        break;

    case 2:
        pesoFinal = pesoTerra * 0.17
        alert('Peso na lua: ' + pesoFinal + 'kg')
        break;
        
   case 3:
        pesoFinal = pesoTerra * 0.38
        alert('Peso em Mercúrio: ' + pesoFinal + 'kg')
        break;

   case 4:
        pesoFinal = pesoTerra * 0.38
        alert('Peso em Marte: ' + pesoFinal + 'kg')
        break;

   case 5:
        pesoFinal = pesoTerra * 0.91
        alert('Peso em Vênus: ' + pesoFinal + 'kg')
        break;
    
   case 6:
        pesoFinal = pesoTerra * 0.92
        alert('Peso em Urano: ' + pesoFinal + 'kg')
        break;

   case 7:
        pesoFinal = pesoTerra * 1.06
        alert('Peso em Saturno: ' + pesoFinal + 'kg')
        break;

   case 8:
        pesoFinal = pesoTerra * 1.19
        alert('Peso em Netuno: ' + pesoFinal + 'kg')
        break;

   case 9:
        pesoFinal = pesoTerra * 2.34
        alert('Peso em Júpiter: ' + pesoFinal + 'kg')
        break;

    default:
        alert('O número digitado é inválido!')
}




