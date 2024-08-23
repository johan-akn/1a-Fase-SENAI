/*2) Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano.
 Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.*/


 let alturaJoaozinho = 175, alturaPedrinho = 160
 let crescimentoJoaozinho = 1, crescimentoPedrinho = 3
 let cont = 0, anoMedia = 1


 while(alturaJoaozinho > alturaPedrinho){

    alturaJoaozinho = Number(alturaJoaozinho) + Number(crescimentoJoaozinho)
    alturaPedrinho = Number(alturaPedrinho) + Number(crescimentoPedrinho)

    cont = Number(cont) + Number(anoMedia)

 }

 alert('Pedrinho levou ' + cont + ' anos para ficar mais alto que Joaozinho.')

