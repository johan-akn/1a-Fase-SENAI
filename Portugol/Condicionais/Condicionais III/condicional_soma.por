/*Fa�a um programa do qual o usu�rio digite quatro n�meros e ao final mostre o maior n�mero,
 o menor n�mero, e a soma dos outros dois n�meros (que n�o s�o o maior nem o menor).
 (DESAFIO: Caso existam n�meros repetidos digitados, ap�s o usu�rio digitar os quatro n�meros,
 n�o mostrar maior, menor nem soma, mas uma mensagem "Voc� digitou n�meros repetidos".)*/

programa {
  funcao inicio() {
    

    //Declarar vari�veis

    real numeroUm, numeroDois, numeroTres, numeroQuatro
    real somaNumeros, somaMeio
    real maiorNumero
    real menorNumero

    //Entrada de dados

    escreva("Digite o primeiro n�mero: ")
    leia(numeroUm)
    
    maiorNumero = numeroUm
    menorNumero = numeroUm
    

    escreva("Digite o segundo n�mero: ")
    leia(numeroDois)


    se(numeroDois > maiorNumero){

      maiorNumero = numeroDois

    }senao se(numeroDois < menorNumero){

      menorNumero = numeroDois
    }
    
    escreva("Digite o terceiro n�mero: ")
    leia(numeroTres)

    se(numeroTres > maiorNumero){

      maiorNumero = numeroTres

    }senao se(numeroTres < menorNumero){

      menorNumero = numeroTres

    }

    escreva("Digite o quarto n�mero: ")
    leia(numeroQuatro)

    se(numeroQuatro > maiorNumero){

      maiorNumero = numeroQuatro


    }senao se(numeroQuatro < menorNumero){

      menorNumero = numeroQuatro

    }

    //C�lculos

   somaNumeros = numeroUm + numeroDois + numeroTres + numeroQuatro
   somaMeio = somaNumeros - maiorNumero - menorNumero


    //Sa�da de dados

    se(numeroUm == numeroDois ou numeroUm == numeroTres ou numeroUm == numeroQuatro ou numeroDois == numeroTres ou numeroDois == numeroQuatro ou numeroTres == numeroQuatro){

      escreva("\nVoc� digitou n�meros repetidos!\n")


    }senao{


    escreva("\nMaior n�mero: ", maiorNumero, "\n")
    escreva("Menor n�mero: ", menorNumero, "\n")
    escreva("\nSoma dos n�meros restantes: ", somaMeio, "\n")

  }
  }
}
