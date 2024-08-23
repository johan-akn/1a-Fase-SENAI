programa {
  funcao inicio() {
    

    //Declarar variáveis

    inteiro senhaDigitada, senhaUsuario = 123
    cadeia  usuarioDigitado, nomeUsuario = "admin"
  
  
    //Entrada de dados

    escreva("Digite o nome de usuário: ")
    leia(usuarioDigitado)

    escreva("Digite a senha: ")
    leia(senhaDigitada)

    
    //Saída de dados

    se(usuarioDigitado == nomeUsuario e senhaDigitada == senhaUsuario){


       escreva("\nLogin efetuado com sucesso", "\n")

    
    }senao se(usuarioDigitado != nomeUsuario e senhaDigitada == senhaUsuario){


        escreva("\nUsuário não existe!\n")
    
    
    
    
    }senao se(usuarioDigitado == nomeUsuario e senhaDigitada != senhaUsuario){


        escreva("\nSenha incorreta!\n")
    
    
  
    }senao{

       escreva("\nLogin falhou!\n")
    }

     

  }
}
