/* Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 10 anos de idade
  - "Juvenil A" de 11 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais*/


  //Declarar variáveis
  let idadeDigitada, mediaCinco = 5, mediaDez = 10, mediaDezoito = 18


  //Entrada de dados
  idadeDigitada = prompt('Digite sua idade: ')


  //Saída de dados
  if(idadeDigitada >= mediaCinco && idadeDigitada <= mediaDez){

    alert('Categoria Infantil A.')

  }
  else if(idadeDigitada > mediaDez && idadeDigitada < mediaDezoito){

    alert('Categoria Juvenil A.')

  }
  else if(idadeDigitada >= mediaDezoito){

    alert('Categoria Senior.')

  }
  else{

    alert('Categoria inválida.')
  }