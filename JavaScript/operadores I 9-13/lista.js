/* Um programa de recomendação de livros baseado nos interesses do usuário.
 O sistema deve solicitar ao usuário seus gêneros literários favoritos e, em seguida, sugerir uma lista de
livros que podem ser do seu interesse.*/


//Declarar variáveis
let generoSelecionado


//Entrada de dados
generoSelecionado = prompt('Bem vindo! Digite seu gênero literário favorito dentre as opções (ficção, romance, terror, hq)')


//Saída de dados
if(generoSelecionado == 'ficção'){

    alert('Ótima escolha! \n\nLivros que podem ser de seu interesse: \nDuna\nFahrenheit 451\nHobbit\nPlaneta dos Macacos')
}
else if(generoSelecionado == 'romance'){

    alert('Que fofo! \n\nLivros que podem ser de seu interesse: \nOrgulho e Preconceito\nRomance Real\nO Despertar\nLugar Feliz')
}
else if(generoSelecionado == 'terror'){

    alert('Que medo! :o\n\nLivros que pode ser de seu interesse: \n\nFrankstein\nIt - A Coisa\nDracula\nCoraline')

}
else if(generoSelecionado == 'hq'){

    alert('Ótima escolha! \n\nLivros que pode ser de seu interesse: \n\nO Cavaleiro das Trevas\nV de Vingança\nScott Pilgrim\nOs Supremos')
}

