/*Um sistema de reservas de ingressos do cinema, que deve permitir que o usuário
escolha o filme, o horário e o número de ingressos desejados.
Após a seleção, deve ser exibido o total a ser pago.
Exibir ao usuário opções de filmes e horários.
Os valores do ingresso devem ser pré-definidos*/


//Declarar variáveis
let filmeSelecionado, horarioSelecionado, numeroIngressos
let valorTotal, valorIngresso = 15


//Entrada de dados
filmeSelecionado = prompt('Bem vindo! Filmes em cartaz: \n\nRatatouille\nShrek\nGarfield \n\nQual você deseja assitir?')


//Saída de dados
if (filmeSelecionado == 'Ratatouille') {

   horarioSelecionado = prompt('Sessões disponíveis: \n12h\n15h\n18h\n\nSelecione um horário: ')
   numeroIngressos = prompt('Quantos ingressos? ')

   valorTotal = numeroIngressos * valorIngresso

   alert('Filme: ' + filmeSelecionado + '\nSessão: ' + horarioSelecionado + '\nNúmero de ingressos: ' + numeroIngressos + '\n\nValor Total: R$' + valorTotal)

}
 else if (filmeSelecionado == 'Shrek') {

   horarioSelecionado = prompt('Sessões disponíveis: \n13h\n16h\n19h\n\nSelecione um horário: ')
   numeroIngressos = prompt('Quantos ingressos? ')

   valorTotal = numeroIngressos * valorIngresso

   alert('Filme: ' + filmeSelecionado + '\nSessão: ' + horarioSelecionado + '\nNúmero de ingressos: ' + numeroIngressos + '\n\nValor Total: R$' + valorTotal)
   
}
 else if (filmeSelecionado == 'Garfield') {

   horarioSelecionado = prompt('Sessões disponíveis: \n14h\n17h\n20h\n\nSelecione um horário: ')
   numeroIngressos = prompt('Quantos ingressos? ')

   valorTotal = numeroIngressos * valorIngresso

   alert('Filme: ' + filmeSelecionado + '\nSessão: ' + horarioSelecionado + '\nNúmero de ingressos: ' + numeroIngressos + '\n\nValor Total: R$' + valorTotal)
   
}
else
alert('Filme indisponível')





