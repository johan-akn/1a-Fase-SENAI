
/*De acordo com a resposta que o Usuário responder, o sistema deverá 
pedir o valor (em números reais) da temperatura a ser convertida e aplicar a fórmula para conversão.*/



programa {
  funcao inicio() {
    
   //Declarar variáveis
   real valorDigitado, grausCelsius, grausFahrenheit, grausKelvin
   real celsiusFahrenheit, fahrenheitCelsius, celsiusKelvin, kelvinCelsius, fahrenheitKelvin, kelvinFahrenheit
   real resultadoConversaoUm, resultadoConversaoDois, resultadoConversaoTres, resultadoConversaoQuatro, resultadoConversaoCinco, resultadoConversaoSeis
   inteiro opcaoSelecionada
    
    

   //Entrada de dados

   escreva("Bem vindo ao sistema, qual conversão deseja realizar?\n\nDigite 1 para: Celsius para Fahrenheit\nDigite 2 para: Fahrenheit para Celsius\nDigite 3 para: Celsius para Kelvin\nDigite 4 para: Kelvin para Celsius\nDigite 5 para: Fahrenheit para Kelvin\nDigite 6 para: Kelvin para Fahrenheit\n")
   escreva("\nSelecione uma das opções acima: ")
   leia(opcaoSelecionada)

   
   se(opcaoSelecionada == 1)
      
     escreva("\nDigite a temperatura a ser convertida: ")
      leia(valorDigitado)
       celsiusFahrenheit = valorDigitado*1.8 + 32
       resultadoConversaoUm = celsiusFahrenheit

     escreva("\nResultado da conversão: ", resultadoConversaoUm, "°", "\n")

   se(opcaoSelecionada == 1)
      
     escreva("\nDigite a temperatura a ser convertida: ")
      leia(valorDigitado)
       celsiusFahrenheit = valorDigitado*1.8 + 32
       resultadoConversaoUm = celsiusFahrenheit

     escreva("\nResultado da conversão: ", resultadoConversaoUm, "°", "\n")



         
   

   
   
   
   
   
  
    
   
   
  

   








  }
}
