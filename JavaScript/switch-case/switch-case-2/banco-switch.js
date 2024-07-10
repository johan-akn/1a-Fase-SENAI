/*Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada:
  1) Saldo 2) Depósito 3) Saque.
 Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela.
 Na opção saldo, apenas mostrar o saldo atual na tela.
 Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.*/


 //Declarar variáveis
 let saldoUsuario = 1000
 let acaoUsuario, valorDeposito, valorSaque


 //Entrada de dados
 prompt('Digite o número de sua conta bancária: ')
 acaoUsuario = Number(prompt('Qual ação deseja realizar? \n1) Saldo\n2) Depósito\n3) Saque\n\n Ação: '))


 //Saída de dados

 switch(true){
     
     case acaoUsuario == 1:
        alert('Ação selecionada: Saldo\n\nSaldo: R$' + saldoUsuario)
        break;
     
     case acaoUsuario == 2:

        valorDeposito = Number(prompt('Ação selecionada: Depósito\n\nDigite o valor do depósito: '))
    
        saldoUsuario = saldoUsuario + valorDeposito
    
        alert('Saldo da conta: R$' + saldoUsuario)
        break;
    
    
     
     case acaoUsuario == 3:
    
        valorSaque = prompt('Ação selecionada: Saque\n\nDigite o valor do saque: ')
    
        if(valorSaque > saldoUsuario){
    
            alert('Valor excedente!')
        }
        else{
    
            saldoUsuario = saldoUsuario - valorSaque
    
            alert('Saldo da conta: R$' + saldoUsuario)
    
        }
        break;
    
     
     default:
    
        alert('Ação inválida!')
     }
