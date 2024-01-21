let sliderElement = document.querySelector('#slider');
const botaoElement = document.querySelector('#button');
const sizePassword = document.querySelector('#valor');
const password = document.querySelector('#password');
const containerPassword = document.querySelector('#container-password');

const charset = "abcdefghijlmnopqrstuvxzABCDEFGHIJLMNOPQRSTUVXZ123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function gerarSenha() {
   let pass = '';
   for(let i = 0, n = charset.length; i < sliderElement.value; i++){
    pass += charset.charAt(Math.floor(Math.random() * n));

    
   }
      containerPassword.classList.remove("hide")
   password.innerHTML = pass;
   novaSenha  = pass;
}

function copiarSenha(){
    alert('senha copiada!')
navigator.clipboard.writeText(novaSenha);

}


