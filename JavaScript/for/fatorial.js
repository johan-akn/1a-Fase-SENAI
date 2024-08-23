/*2) Fazer um programa que calcule o fatorial de um número.
 Fatorial é a multiplicação do próprio número por todos abaixo dele até 1.
(Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).*/


//Declarar variáveis
let numeroDigitado, resultadoFatorial

numeroDigitado = Number(prompt('Digite um número para calcular seu fatorial:'))

resultadoFatorial = numeroDigitado

for(i = numeroDigitado - 1; i > 0; i--){

    
    resultadoFatorial = resultadoFatorial * i
    

}

alert('Resultado de ' + numeroDigitado + ' fatorial: '+ resultadoFatorial)