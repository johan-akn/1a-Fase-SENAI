programa {
  funcao inicio() {
    

    //Declarar vari�veis

    inteiro senhaDigitada, senhaUsuario = 123
    cadeia  usuarioDigitado, nomeUsuario = "admin"
  
  
    //Entrada de dados

    escreva("Digite o nome de usu�rio: ")
    leia(usuarioDigitado)

    escreva("Digite a senha: ")
    leia(senhaDigitada)

    
    //Sa�da de dados

    se(usuarioDigitado == nomeUsuario e senhaDigitada == senhaUsuario){


       escreva("\nLogin efetuado com sucesso", "\n")

    
    }senao se(usuarioDigitado != nomeUsuario e senhaDigitada == senhaUsuario){


        escreva("\nUsu�rio n�o existe!\n")
    
    
    
    
    }senao se(usuarioDigitado == nomeUsuario e senhaDigitada != senhaUsuario){


        escreva("\nSenha incorreta!\n")
    
    
  
    }senao{

       escreva("\nLogin falhou!\n")
    }

     

  }
}
