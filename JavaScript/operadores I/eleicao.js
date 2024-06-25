/*Uma cidade pretende apurar os votos de sua eleição.
 Faça um programa para ler o número total de eleitores.
 Em seguida o número de votos do candidato X, o número de votos do candidato Y,
 total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores).
 Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/


 //Declarar variáveis
 let totalEleitores
 let votosCandidatoX, votosCandidatoY, votosEmBranco, votosNulos
 let porcentagemX, porcentagemY, porcentagemEmBranco, porcentagemNulos
 let mediaCem = 100

 //Entrada de dados
 votosCandidatoX = Number(prompt('Digite a quantidade de votos do candidato X: '))
 votosCandidatoY = Number(prompt('Digite a quantidade de votos do candidato Y: '))
 votosEmBranco = Number(prompt('Digite a quantidade de votos em branco: '))
 votosNulos = Number(prompt('Digite a quantidade de votos nulos: '))


 //Cálculo
 totalEleitores = votosCandidatoX + votosCandidatoY + votosEmBranco + votosNulos
 porcentagemX = (votosCandidatoX / totalEleitores) * mediaCem
 porcentagemY = (votosCandidatoY / totalEleitores) * mediaCem
 porcentagemEmBranco = (votosEmBranco / totalEleitores) * mediaCem
 porcentagemNulos = (votosNulos / totalEleitores) * mediaCem


 //Saída de dados
 alert('Total de eleitores: ' + totalEleitores + '\n' + '\nVotos Candidato X: ' + porcentagemX + '%' + '\nVotos Candidato Y: ' + porcentagemY + '%' + '\nVotos em branco: ' + porcentagemEmBranco + '%' + '\nVotos nulos: ' + porcentagemNulos + '%')