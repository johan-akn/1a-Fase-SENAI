
    
/*1) Elaborar um programa que alerte sobre os riscos de animais em extinção.
 O usuário deve digitar o nome da espécie e a sua população (total de indivíduos).
 Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, 
 são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!" */

programa {
  funcao inicio() {
    
 
  //Declarar variáveis

  cadeia nomeEspecie
  inteiro populacaoEspecie
  inteiro mediaDuzentos = 200, mediaQuinhentos = 500, mediaMil = 1000, mediaCincoMil = 5000
 
 
 //Entrada de dados

 escreva("Digite o nome da espécie: ")
 leia(nomeEspecie)

 escreva("Digite a população total da espécie: ")
 leia(populacaoEspecie)
 
 
 //Saída de dados


 se(populacaoEspecie >= mediaDuzentos e populacaoEspecie <= mediaQuinhentos){

    escreva("\nEspécie criticamente em perigo\n")


 }senao se(populacaoEspecie >= mediaQuinhentos e populacaoEspecie <= mediaMil){

    escreva("\nEspécie em perigo\n")


 }senao{

    escreva("\nEspécie vulnerável\n")





 }
 
  }
}

  }
}
