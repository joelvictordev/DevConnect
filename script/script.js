function entrar(){
    let email = document.querySelector('#email')
  
    let senha = document.querySelector('#senha')

    let msgErro = document.querySelector('#msgErro')
    let listaUser = []
  
    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }
  
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
    listaUser.forEach((item) => {
        if(email.value == item.emailCad && senha.value == item.senhaCad){
       
        userValid = {
            nome: item.nomeCad,
            email: item.emailCad,
            senha: item.senhaCad
        }
      
    }
    })
   
    if(email.value == userValid.email && senha.value == userValid.senha){
    alert('Seja bem vindo!')
    
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    email.setAttribute('style', 'border-color: red')
    senha.setAttribute('style', 'border-color: red')
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Usuário ou senha incorretos'
    email.focus()
  }
  
  console.log(JSON.stringify(json.listaUser))

}