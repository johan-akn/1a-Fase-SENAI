/*Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose.
 Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta).
 Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas.
 Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não.
 Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".*/


 //Declarar variáveis
 let nomePaciente, perguntaUm, perguntaDois
 let glutenAlimentoUm, glutenAlimentoDois, glutenAlimentoTres
 let lactoseAlimentoUm, lactoseAlimentoDois, lactoseAlimentoTres
 let intoleranteGluten = false, intoleranteLactose = false
 let contemGluten = false, contemLactose = false


 //Entrada de dados
 nomePaciente = prompt('Digite seu nome: ')
 perguntaUm = prompt('O paciente é celíaco (intolerante a glúten)? ')
 perguntaDois = prompt('O paciente é intolerante a lactose? ')

 alert('Insira os dados do primeiro alimento ')
 glutenAlimentoUm = prompt('O alimento possui glúten? ')
 lactoseAlimentoUm = prompt('O alimento possui lactose? ')

 alert('Insira os dados do segundo alimento ')
 glutenAlimentoDois = prompt('O segundo alimento possui glúten? ')
 lactoseAlimentoDois = prompt('O segundo alimento possui lactose? ')

 alert('Insira os dados do terceiro alimento ')
 glutenAlimentoTres = prompt('O terceiro alimento possui glúten? ')
 lactoseAlimentoTres = prompt('O terceiro alimento possui lactose? ')

 
 //Saída de dados

 //Verificações
 alert('Ficha do paciente: \nNome: ' + nomePaciente + '\nIntolerante a glúten? ' + perguntaUm + '\nIntolerante a lactose? ' + perguntaDois)

 if(perguntaUm == 'sim' || perguntaUm ==  'SIM' || perguntaUm == 'Sim'){

   intoleranteGluten = true

 }
 else if(perguntaDois == 'sim' || perguntaDois == 'SIM' || perguntaDois == 'Sim'){

   intoleranteLactose = true

 }
 if(glutenAlimentoUm == 'sim' || glutenAlimentoUm == 'SIM' || glutenAlimentoUm == 'Sim' || glutenAlimentoDois == 'sim' || glutenAlimentoDois == 'SIM' || glutenAlimentoDois == 'Sim' || glutenAlimentoTres == 'sim' || glutenAlimentoTres == 'SIM' || glutenAlimentoTres == 'Sim'){

   contemGluten = true

 }
 else if(lactoseAlimentoUm == 'sim' || lactoseAlimentoUm ==  'SIM' || lactoseAlimentoUm == 'Sim' || lactoseAlimentoDois == 'sim' || lactoseAlimentoDois ==  'SIM' || lactoseAlimentoDois == 'Sim' ||  lactoseAlimentoTres == 'sim' || lactoseAlimentoTres ==  'SIM' || lactoseAlimentoTres == 'Sim'){

   contemLactose = true

 }


 //Resultado dieta
 if(intoleranteGluten == false && intoleranteLactose == false){

    alert('Dieta adequada!')

 }
 else if(intoleranteGluten == true && intoleranteLactose == false && contemGluten == true){

    alert('Dieta inadequada, contém alimentos aos quais o paciente é intolerante!')

 }
 else if(intoleranteGluten == false && intoleranteLactose == true && contemLactose == true){

    alert()

 }
 else if(intoleranteGluten == true && intoleranteLactose == true && contemGluten == true && contemLactose == true){

    alert('Dieta inadequada, contém alimentos aos quais o paciente é intolerante!')

 }
 else{

    alert('Dieta adequada!')
 }



