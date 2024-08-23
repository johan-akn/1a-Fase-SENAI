/* As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos.
A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez.
Programar um sistema que calcule o total de filhotes ao longo da vida
 e a média de filhotes de uma baleia dessa espécie por década.*/


 //Declarar variáveis
 let tempoReproducao = 4, mediaVida = 200, mediaDecada = 10
 let filhotesVida, filhotesDecada


 //Cálculo
 filhotesVida = mediaVida/tempoReproducao
 filhotesDecada = mediaDecada/tempoReproducao


 //Saída de dados
 alert('As baleias da Groenlândia têm aproximandamente ' + filhotesVida + ' filhotes durante a vida e em média ' + filhotesDecada + ' filhotes por década.')
