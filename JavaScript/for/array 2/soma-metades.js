 /*1) Desenvolva um programa que o usuário digite 10 números positivos e inteiros,
 ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade.
  (Somatório da primeira metade - Somatório da segunda metade)*/

  //Declarar variáveis
  let listaNumeros = []
  let metadeUm = 0, metadeDois = 0
  let resultadoSubtracao

  for(i = 0; i<10; i++){

    listaNumeros.push(Number(prompt('Digite um número:')))
  }

  for(i = 0; i<5; i++){

    metadeUm += listaNumeros[i]
  }

  for(i = 5; i<10; i++){

    metadeDois += listaNumeros[i]
  }

  resultadoSubtracao = metadeUm - metadeDois


  alert(`Lista dos números: ${listaNumeros} \nPrimeira metade: ${metadeUm} \nSegunda metade: ${metadeDois}\nMetade um - Metade dois: ${resultadoSubtracao}`)