/*Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)*/


//Declaarar varáveis
let anoNascimento


//Entrada de dados
anoNascimento = prompt('Digite seu ano de nascimento')

switch(true){

    case anoNascimento <= 1945:
        alert('Sem geração')
        break;

    case anoNascimento > 1945 && anoNascimento <= 1964:
        alert('Baby Boomer')
        break;

    case anoNascimento > 1964 && anoNascimento <= 1980:
        alert('Geração X')
        break;

    case anoNascimento > 1980 && anoNascimento <= 1996:
        alert('Geração Y/Millenial')
        break;

    case anoNascimento > 1996 && anoNascimento <= 2010:
        alert('Geração Z')
        break;

    case anoNascimento > 2010 && anoNascimento <= 2024:
        alert('Geração Alfa')
        break;

    default:
        alert('Nem nasceu ainda!')
}