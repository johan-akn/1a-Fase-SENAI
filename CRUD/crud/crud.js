//CRUD simples js


//Declarar variáveis
let arrayUsernames = []
let acaoUsuario
let userAdd, userFind, userIndex
let userEditado, userExclude


do{
    acaoUsuario = Number(prompt('>>MENU<< \n\n 1) Cadastrar \n 2) Editar \n 3) Excluir \n 4) Listar \n 5) Sair\n\nEscolha uma opção:'))

    switch(acaoUsuario){

////////////////////////////////////// Cadastrar /////////////////////////////////////////////

        case 1:
            userAdd = prompt('Digite um nome de usuário:')
            arrayUsernames.push(userAdd)
            alert('Usuário cadastrado.')
            break;

/////////////////////////////////////// Editar /////////////////////////////////////////////
        case 2:
            userFind = prompt('Digite o nome do usuário que deseja editar:')
            userIndex = arrayUsernames.indexOf(userFind)
            userEditado = prompt('Digite o novo nome de usuário:')

            if(userIndex != -1){

                arrayUsernames[userIndex] = userEditado
                alert('Usuário editado com sucesso!')
            }
            else{
                alert('Usuário não encontrado!')
            }
            break;

/////////////////////////////////////// Excluir /////////////////////////////////////////////
        case 3:
            userExclude = prompt('Digite o nome do usuário a excluir:')
            userIndex = arrayUsernames.indexOf(userExclude)

            if(userIndex != -1){
                
                arrayUsernames.splice(userIndex, 1)
                alert('Usuário excluído com sucesso!')
            }
            else{
                alert('Usuário não encontrado!')
            }
            break;

/////////////////////////////////////// Listar /////////////////////////////////////////////
        case 4:
            if(arrayUsernames.length != 0){

                console.log(`Usuários cadastrados: ${arrayUsernames}`)
            }
            else{
                alert('Nenhum usuário cadastrado!')
            }
            break;


/////////////////////////////////////// Sair /////////////////////////////////////////////

        case 5:
            alert('Sair')
            break;

        default:
            alert('Opção inválida!')
    }

}while(acaoUsuario != 5)

console.log(arrayUsernames)

