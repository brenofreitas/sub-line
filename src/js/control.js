
var login = document.getElementById("login");
var code = document.getElementById("senha");

function verificar(){
    if(login.value = "Larissa" && code.value == "kato"){
        location.href = "./src/pages/dashboard.html";
    } else {
        alert("Erro: Login ou senha não correspondem. Tente novamente!");
        login.value = '';
        code.value = '';
    }
}