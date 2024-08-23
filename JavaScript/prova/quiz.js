/*Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional SWITCH / CASE.
 O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.
 Realizar o cálculo da pontuação e mostrar ao final.

1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

A) Van Helsing (2 pontos)
B) Castlevania (3 pontos)
C) The Vampire Diaries (2 pontos)
D) Blade: The Series (1 ponto)


2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

A) Alice no País das Maravilhas (1 ponto)
B) O Hobbit (1 ponto)
C) A Fantástica Fábrica de Chocolates (1 ponto)
D) Coraline (2 pontos)


3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

A) The Legend of Zelda (3 pontos)
B) Kirby (2 pontos)
C) Metroid (3 pontos)
D) Super Mario Bros (2 pontos)


4) Quais dos autores citados, representam melhor o gênero de livros de terror?

A) Stephen King (2 pontos)
B) Edgar Allan Poe (2 pontos)
C) H.P. Lovecraft (2 pontos)
D) Mary Shelley (1 ponto)


Critérios de avaliação:

(0,5) Criar uma tela (janela) inicial de boas vindas, explicando o quiz. FEITO
(1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos. FEITO
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos. FEITO 
(0,5) Mostrar na tela ao final, quais foram as opções / respostas escolhidas em cada pergunta. FEITO
(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir além da pontuação, uma mensagem "Parabéns!" FEITO*/ 


//Declarar variáveis
let perguntaUm, perguntaDois, perguntaTres, perguntaQuatro
let somaPontos = 0


//Entrada de dados
alert('Bem vindo (a) ao melhor quiz geek do mundo! \n\nResponda as questões e veja quantos pontos você consegue!')


 perguntaUm = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração? \n\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series\n\nEscolha:').toLowerCase()

 switch(perguntaUm){

    case 'a':
        somaPontos = somaPontos + 2
        break;

    case 'b':
        somaPontos = somaPontos + 3
        break;

    case 'c':
        somaPontos = somaPontos + 2
        break;

    case 'd':
        somaPontos = somaPontos + 1
        break;

    default:
        alert('Resposta inválida! \nNenhum ponto foi adicionado.')
 }

 perguntaDois = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia? \n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline\n\nEscolha:').toLowerCase()

 switch(perguntaDois){

    case 'a':
        somaPontos = somaPontos + 1
        break;

    case 'b':
        somaPontos = somaPontos + 1
        break;

    case 'c':
        somaPontos = somaPontos + 1
        break;

    case 'd':
        somaPontos = somaPontos + 2
        break;

    default:
        alert('Resposta inválida! \nNenhum ponto foi adicionado.')

 }

 perguntaTres = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo? \n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros\n\nEscolha:').toLowerCase()

 switch(perguntaTres){

    case 'a':
        somaPontos = somaPontos + 3
        break;

    case 'b':
        somaPontos = somaPontos + 2
        break;

    case 'c':
        somaPontos = somaPontos + 3
        break;

    case 'd':
        somaPontos = somaPontos + 2
        break;

    default:
        alert('Resposta inválida! \nNenhum ponto foi adicionado.')

 }

 perguntaQuatro = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror? \n\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley\n\nEscolha:').toLowerCase()

 switch(perguntaQuatro){

    case 'a':
        somaPontos = somaPontos + 2
        break;

    case 'b':
        somaPontos = somaPontos + 2
        break;

    case 'c':
        somaPontos = somaPontos + 2
        break;

    case 'd':
        somaPontos = somaPontos + 1
        break;

    default:
        alert('Resposta inválida! \nNenhum ponto foi adicionado.')

 }

 alert('Respostas escolhidas: \nPergunta N°1: ' + perguntaUm + '\nPergunta N°2: ' + perguntaDois + '\nPergunta N°3: ' + perguntaTres + '\nPergunta N°4: ' + perguntaQuatro)
 
 if(somaPontos == 10){

    alert('Pontuação final: ' + somaPontos + '. Parabéns!')
 }
 else{

    alert('Pontuação final: ' + somaPontos)
 }
