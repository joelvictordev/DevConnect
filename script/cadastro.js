let nome = document.querySelector('#nome')
let validNome = false

let email = document.querySelector('#email')
let validEmail = false

let contato = document.querySelector('#contato')
let validContato = false

let senha = document.querySelector('#senha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let validConfirmSenha = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        validNome = false
    } else {
        validNome = true
    } 
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 4){
        validEmail = false
    } else {
        validEmail = true
    }
})

contato.addEventListener('keyup', () => {
    if(contato.value.length <= 4){
        validContato = false
    } else {
        validContato = true
    }
  })

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        validSenha = false
    } else {
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        validConfirmSenha = false
    } else {
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validContato && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
            nomeCad: nome.value,
            emailCad: email.value,
            senhaCad: senha.value 
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = ''
    
        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 3000)
  
    
    } else {
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucesso.innerHTML = ''
        msgSucesso.setAttribute('style', 'display: none')
    } 
}
