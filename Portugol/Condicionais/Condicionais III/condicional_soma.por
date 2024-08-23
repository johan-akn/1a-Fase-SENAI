/*Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número,
 o menor número, e a soma dos outros dois números (que não são o maior nem o menor).
 (DESAFIO: Caso existam números repetidos digitados, após o usuário digitar os quatro números,
 não mostrar maior, menor nem soma, mas uma mensagem "Você digitou números repetidos".)*/

programa {
  funcao inicio() {
    

    //Declarar variáveis

    real numeroUm, numeroDois, numeroTres, numeroQuatro
    real somaNumeros, somaMeio
    real maiorNumero
    real menorNumero

    //Entrada de dados

    escreva("Digite o primeiro número: ")
    leia(numeroUm)
    
    maiorNumero = numeroUm
    menorNumero = numeroUm
    

    escreva("Digite o segundo número: ")
    leia(numeroDois)


    se(numeroDois > maiorNumero){

      maiorNumero = numeroDois

    }senao se(numeroDois < menorNumero){

      menorNumero = numeroDois
    }
    
    escreva("Digite o terceiro número: ")
    leia(numeroTres)

    se(numeroTres > maiorNumero){

      maiorNumero = numeroTres

    }senao se(numeroTres < menorNumero){

      menorNumero = numeroTres

    }

    escreva("Digite o quarto número: ")
    leia(numeroQuatro)

    se(numeroQuatro > maiorNumero){

      maiorNumero = numeroQuatro


    }senao se(numeroQuatro < menorNumero){

      menorNumero = numeroQuatro

    }

    //Cálculos

   somaNumeros = numeroUm + numeroDois + numeroTres + numeroQuatro
   somaMeio = somaNumeros - maiorNumero - menorNumero


    //Saída de dados

    se(numeroUm == numeroDois ou numeroUm == numeroTres ou numeroUm == numeroQuatro ou numeroDois == numeroTres ou numeroDois == numeroQuatro ou numeroTres == numeroQuatro){

      escreva("\nVocê digitou números repetidos!\n")


    }senao{


    escreva("\nMaior número: ", maiorNumero, "\n")
    escreva("Menor número: ", menorNumero, "\n")
    escreva("\nSoma dos números restantes: ", somaMeio, "\n")

  }
  }
}
