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
 perguntaUm = prompt('O paciente é celíaco (intolerante a glúten)? ').toUpperCase()
 perguntaDois = prompt('O paciente é intolerante a lactose? ').toUpperCase()

 alert('Insira os dados do primeiro alimento ')
 glutenAlimentoUm = prompt('O alimento possui glúten? (SIM/NÃO) ').toUpperCase()
 lactoseAlimentoUm = prompt('O alimento possui lactose? (SIM/NÃO) ').toUpperCase()

 alert('Insira os dados do segundo alimento ')
 glutenAlimentoDois = prompt('O segundo alimento possui glúten? (SIM/NÃO)').toUpperCase()
 lactoseAlimentoDois = prompt('O segundo alimento possui lactose? (SIM/NÃO)').toUpperCase()

 alert('Insira os dados do terceiro alimento ')
 glutenAlimentoTres = prompt('O terceiro alimento possui glúten? (SIM/NÃO)').toUpperCase()
 lactoseAlimentoTres = prompt('O terceiro alimento possui lactose? (SIM/NÃO)').toUpperCase()

 
 //Saída de dados

 //Verificações
 alert('Ficha do paciente: \nNome: ' + nomePaciente + '\nIntolerante a glúten? ' + perguntaUm + '\nIntolerante a lactose? ' + perguntaDois)

 if(perguntaUm == 'SIM'){

   intoleranteGluten = true

 }
 else if(perguntaDois == 'SIM'){

   intoleranteLactose = true

 }
 if(glutenAlimentoUm == 'SIM' || glutenAlimentoDois == 'SIM' || glutenAlimentoTres == 'SIM'){

   contemGluten = true

 }
 else if(lactoseAlimentoUm ==  'SIM' || lactoseAlimentoDois ==  'SIM' || lactoseAlimentoTres ==  'SIM'){

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



