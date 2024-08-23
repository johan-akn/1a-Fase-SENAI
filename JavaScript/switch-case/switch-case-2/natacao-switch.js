/*Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 7 anos de idade
  - "Infantil B" de 8 a 10 anos de idade
  - "Juvenil A" de 11 a 13 anos de idade
  - "Juvenil B" de 14 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais*/

  
  //Declarar variáveis
  let idadeDigitada

  //Entrada de dados
  idadeDigitada = Number(prompt('Digite sua idade:'))


  //Saída de dados
  switch (true){

    case idadeDigitada >= 5 && idadeDigitada <= 7:
        alert('Categoria Infantil A')
        break;

    case idadeDigitada >= 8 && idadeDigitada <= 10:
        alert('Categoria Infantil B')
        break;

    case idadeDigitada >= 11 && idadeDigitada <= 13:
        alert('Categoria Juvenil A')
        break;

    case idadeDigitada > 14 && idadeDigitada <= 17:
        alert('Categoria Juvenil B')
        break;
               
    case idadeDigitada >= 18:
        alert('Categoria Senior')
        break;

    default:
        alert('Número inválido.')
  }
