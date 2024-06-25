/*O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes.
 Criar um sistema utilizando estrutura condicional IF/ELSE IF/ELSE, que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas.
 Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer.
 Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

Vaga para Equipe de Resgate -> O candidato deve ter de 18 a 60 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
Vaga para Equipe de Tratamento -> O candidato deve ter de 23 a 65 anos, possuir formação em "Veterinária" e residir em Florianópolis.


Critérios de avaliação:

(1,0) Receber e armazenar os dados do candidato. FEITO
(1,5) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer. FEITO
(0,5) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer". FEITO*/


//Declarar variáveis
let nomeCandidato, idadeCandidato, formacaoCandidato, cidadeCandidato
let idadeVagaUm = false, idadeVagaDois = false
let formacaoVagaUm = false, formacaoVagaDois = false
let cidadeRequisito = false


//Entrada de dados
alert('Bem vindo (a) ao processo seletivo do CETAS!\n\nDigite suas informações a seguir: ')
nomeCandidato = prompt('Digite seu nome:')
idadeCandidato = prompt('Digite sua idade:')
formacaoCandidato = prompt('Digite sua formação:')
cidadeCandidato = prompt('Digite a cidade em que reside:')



//Verficações
if(idadeCandidato >= 18 && idadeCandidato <= 60){

    idadeVagaUm = true  
}

if(idadeCandidato >= 23 && idadeCandidato <= 65){

    idadeVagaDois = true
}

if(formacaoCandidato == 'Biologia' || formacaoCandidato == 'Ecologia'){

    formacaoVagaUm = true

}
if(formacaoCandidato == 'Veterinária'){

    formacaoVagaDois = true

}

if(cidadeCandidato == 'Florianópolis'){

    cidadeRequisito = true
}



//Saída de dados
if( idadeVagaUm == true && formacaoVagaUm == true && cidadeRequisito == true){

    alert('Nome do candidato: ' + nomeCandidato + '\nCandidato apto para a vaga de Equipe de Resgate.')


}
else if(idadeVagaDois == true && formacaoVagaDois == true && cidadeRequisito == true){

 
    alert('Nome do candidato: ' + nomeCandidato + '\nCandidato apto para a vaga de Equipe de Tratamento.')

}
else{

    alert('Não apto a concorrer')
}

    
    
    
    

    
    
    
    
    












