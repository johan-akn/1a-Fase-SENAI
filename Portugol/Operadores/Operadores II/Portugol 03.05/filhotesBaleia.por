/*As baleias da Groenl�ndia est�o entre os animais que vivem mais tempo na Terra, em m�dia 200 anos. 
 A reprodu��o se d� a cada 4 anos, tendo somente 1 filhote por vez.
 Programar um sistema que calcule o total de filhotes ao longo da vida e a m�dia de filhotes de uma baleia dessa esp�cie por d�cada.
*/


programa {
  funcao inicio() {

 //Declarar vari�veis

inteiro vidaBaleia = 200, tempoReproducao = 4, filhotePorReproducao = 1, decadaMedia = 10, mediaReproducao, mediaFilhotes
real mediaFilhotesDecada


 //C�lculos

mediaReproducao = vidaBaleia/tempoReproducao
mediaFilhotes = mediaReproducao*filhotePorReproducao
mediaFilhotesDecada = decadaMedia/tempoReproducao


//Sa�da de dados

escreva("\nAs baleias da Gro�nlandia t�m uma m�dia de ", mediaFilhotes, " filhotes durante a vida.", "\n")
escreva("E uma m�dia de ", mediaFilhotesDecada, " filhotes por d�cada.", "\n")


    
  }
}
