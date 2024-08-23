let elementoInptUser = document.getElementById('inptUser')
let elementoLabelLista = document.getElementById('lblLista')
let arrayUsernames = [], userIndex, userEdit

function BotaoCadastrar(){

    arrayUsernames.push(elementoInptUser.value)
    alert('Usuário cadastrado!')
    limpar()
    Lista()
}

function BotaoEditar(){

    userIndex = arrayUsernames.indexOf(elementoInptUser.value)

    if(userIndex != -1){
        userEdit = prompt('Digite o novo nome de usuário:')
        arrayUsernames[userIndex] = userEdit
        alert('Usuário alterado com sucesso!')
        limpar()
        Lista()
    }
    else{
        alert('Usuário não existe!')
    }
}

function BotaoExcluir(){

    userIndex = arrayUsernames.indexOf(elementoInptUser.value)

    if(userIndex != -1){
        arrayUsernames.splice(userIndex, 1)
        alert('Usuário excluído com sucesso!')
        limpar()
        Lista()
    }
    else{
        alert('Usuário não existe!')
    }
}

function Lista(){

    elementoLabelLista.innerHTML = arrayUsernames
    
}

function limpar(){
    elementoInptUser.value = ''
}