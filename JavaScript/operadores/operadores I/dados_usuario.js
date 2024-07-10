/*Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço.
 Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]".
 Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis. */


 //Declarar variáveis
 let nomeCliente
 let idadeCliente
 let nacionalidadeCliente
 let enderecoCliente 

 //Entrada de dados
 nomeCliente = prompt('Digite seu nome: ')
 idadeCliente = prompt('Digite sua idade: ')
 nacionalidadeCliente = prompt('Digite sua nacionalidade: ')
 enderecoCliente = prompt('Digite seu endereço: ')

 //Saída de dados
alert('Cliente ' + nomeCliente + ', com ' + idadeCliente + ' anos, ' + nacionalidadeCliente + ', reside no endereço ' + enderecoCliente + '.')