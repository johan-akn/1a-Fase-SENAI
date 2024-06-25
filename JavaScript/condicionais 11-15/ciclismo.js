/*Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike",
 revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo
 dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km),
 Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km),
 Trecho 4 Pântano do Sul até Av. Beira-Mar (35km).
  Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho.
 Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula.
 Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!",
 caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"*/


 //Declarar variáveis
 let nomeEquipe, nomeMembroUm, nomeMembroDois, nomeMembroTres, nomeMembroQuatro
 let tempoTotal, tempoMembroUm, tempoMembroDois, tempoMembroTres, tempoMembroQuatro
 let totalVolta = 140, trechoUm = 30, trechoDois = 45, trechoTres = 30, trechoQuatro = 35
 let mediaTotal, mediaTrechoUm, mediaTrechoDois, mediaTrechoTres, mediaTrechoQuatro
 let mediaQuinze = 15, mediaDezoito = 18
 

 //Entrada de dados
 nomeEquipe = prompt('Digite o nome da equipe: ')

 nomeMembroUm = prompt('Digite o nome do primeiro membro: ')
 tempoMembroUm = Number(prompt('Digite o tempo do percurso (em horas): '))

 nomeMembroDois = prompt('Digite o nome do segundo membro: ')
 tempoMembroDois = Number(prompt('Digite o tempo do percurso (em horas): '))

 nomeMembroTres = prompt('Digite o nome do terceiro membro: ')
 tempoMembroTres = Number(prompt('Digite o tempo do percurso (em horas): '))

 nomeMembroQuatro = prompt('Digite o nome do quarto membro: ')
 tempoMembroQuatro = Number(prompt('Digite o tempo do percurso (em horas): '))


 //Cálculos
 tempoTotal = tempoMembroUm + tempoMembroDois + tempoMembroTres + tempoMembroQuatro
 mediaTotal = totalVolta / tempoTotal
 mediaTrechoUm = trechoUm / tempoMembroUm
 mediaTrechoDois = trechoDois / tempoMembroDois
 mediaTrechoTres = trechoTres / tempoMembroTres
 mediaTrechoQuatro = trechoQuatro / tempoMembroQuatro

 
 //Saída de dados
 alert('Velocidade média de ' + nomeMembroUm + ': ' + mediaTrechoUm + 'km/h\nVelocidade média de ' + nomeMembroDois + ': ' + mediaTrechoDois + 'km/h\nVelocidade média de ' + nomeMembroTres + ': ' + mediaTrechoTres + 'km/h\nVelocidade média de ' + nomeMembroQuatro + ': ' + mediaTrechoQuatro + 'km/h')
 
 if(mediaTotal < mediaQuinze){

    alert('Velocidade média da equipe ' + nomeEquipe + ': ' + mediaTotal + 'km/h' + '\nDesempenho pode melhorar bastante!')

 }
 else if(mediaTotal >= mediaQuinze && mediaTotal <= mediaDezoito){

    alert('Velocidade média da equipe ' + nomeEquipe + ': ' + mediaTotal + 'km/h' + '\nDesempenho bom, mas pode melhorar!')

 }
 else{

    alert('Velocidade média da equipe ' + nomeEquipe + ': ' + mediaTotal.toFixed(2) + 'km/h' + '\nDesempenho excelente. Parabéns!')
 }


