
    
/*1) Elaborar um programa que alerte sobre os riscos de animais em extin��o.
 O usu�rio deve digitar o nome da esp�cie e a sua popula��o (total de indiv�duos).
 Popula��es entre 200 e 500 indiv�duos, s�o classificadas como "Esp�cie criticamente em perigo", popula��es entre 500 e 1000 indiv�duos, 
 s�o classificadas como "Esp�cie em perigo" e popula��es entre 1000 e 5000 indiv�duos, s�o classificadas como "Esp�cie vulner�vel!" */

programa {
  funcao inicio() {
    
 
  //Declarar vari�veis

  cadeia nomeEspecie
  inteiro populacaoEspecie
  inteiro mediaDuzentos = 200, mediaQuinhentos = 500, mediaMil = 1000, mediaCincoMil = 5000
 
 
 //Entrada de dados

 escreva("Digite o nome da esp�cie: ")
 leia(nomeEspecie)

 escreva("Digite a popula��o total da esp�cie: ")
 leia(populacaoEspecie)
 
 
 //Sa�da de dados


 se(populacaoEspecie >= mediaDuzentos e populacaoEspecie <= mediaQuinhentos){

    escreva("\nEsp�cie criticamente em perigo\n")


 }senao se(populacaoEspecie >= mediaQuinhentos e populacaoEspecie <= mediaMil){

    escreva("\nEsp�cie em perigo\n")


 }senao{

    escreva("\nEsp�cie vulner�vel\n")





 }
 
  }
}

  }
}
