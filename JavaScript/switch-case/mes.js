/*2) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano.
 Deve ser perguntado ao usuário o mês e a resposta deve ser numérica.
 Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".*/


 //Declarar variáveis
 let mesDigitado
 

 //Entrada de dados
 mesDigitado = prompt('Bem vindo! Digite um mês (em número) e descubra quantos dias o mês tem\nQual mês deseja saber?')


 //Saída de dados
 switch(mesDigitado){

    case '1':
        alert('Janeiro possui 31 dias')
        break;

    case '2':
        alert('Fevereiro possui 28 dias')
        break;

    case '3':
        alert('Março possui 31 dias')
        break;

    case '4':
        alert('Abril possui 30 dias')
        break;

    case '5':
        alert('Maio possui 31 dias')
        break;

    case '6':
        alert('Junho possui 30 dias')
        break;

    case '7':
        alert('Julho possui 31 dias')
        break;

    case '8':
        alert('Agosto possui 31 dias')
        break;

    case '9':
        alert('Setembro possui 30 dias')
        break;

    case '10':
        alert('Outubro possui 31 dias')
        break;

    case '11':
        alert('Novembro possui 30 dias')
        break;

    case '12':
        alert('Dezembro possui 31 dias')
        break;

    default:
        alert(mesDigitado + ' não é um dos meses do ano!')


    

 }