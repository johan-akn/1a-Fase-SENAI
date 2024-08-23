/*As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. 
 A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
 Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.
*/


programa {
  funcao inicio() {

 //Declarar variáveis

inteiro vidaBaleia = 200, tempoReproducao = 4, filhotePorReproducao = 1, decadaMedia = 10, mediaReproducao, mediaFilhotes
real mediaFilhotesDecada


 //Cálculos

mediaReproducao = vidaBaleia/tempoReproducao
mediaFilhotes = mediaReproducao*filhotePorReproducao
mediaFilhotesDecada = decadaMedia/tempoReproducao


//Saída de dados

escreva("\nAs baleias da Groênlandia têm uma média de ", mediaFilhotes, " filhotes durante a vida.", "\n")
escreva("E uma média de ", mediaFilhotesDecada, " filhotes por década.", "\n")


    
  }
}
