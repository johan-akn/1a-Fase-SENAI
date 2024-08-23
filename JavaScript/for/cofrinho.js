/*1) Elaborar um sistema similar a um cofre "porquinho".
 O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos.
 O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar).
 Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.*/

 
 //Declarar variáveis
 let moedaDigitada, totalEconomia = 0
 let qntdUm= 0, qntdCinco = 0, qntdDez = 0, qntdVinteCinco= 0, qntdCinquenta = 0

 do{

     moedaDigitada = Number(prompt('Qual moeda deseja inserir?\n\n1) Um centavo \n5) Cinco centavos \n10) Dez centavos \n25) Vinte e cinco centavos \n50) Cinquenta centavos\n\n0) Sair'))

     switch(moedaDigitada){

        case 1:
        qntdUm += 1
        totalEconomia += moedaDigitada
        break;

        case 5:
        qntdCinco += 1
        totalEconomia += moedaDigitada
        break;

        case 10:
        qntdDez += 1
        totalEconomia += moedaDigitada
        break;

        case 25:
        qntdVinteCinco += 1
        totalEconomia += moedaDigitada
        break;

        case 50:
        qntdCinquenta += 1
        totalEconomia += moedaDigitada
        break;
     }


}while(moedaDigitada != 0)

totalEconomia = totalEconomia / 100

alert('Economias do dia: R$' + totalEconomia.toFixed(2) + '\n\n' + qntdUm + ' moedas de 1 centavo;' + '\n' + qntdCinco + ' moedas de 5 centavos;' + '\n' + qntdDez + ' moedas de 10 centavos;' + '\n' + qntdVinteCinco + ' moedas de 25 centavos;' + '\n' + qntdCinquenta + ' moedas de 50 centavos.')
