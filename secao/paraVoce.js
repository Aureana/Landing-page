function logar(){
    var login = document.getElementById("login").value;
    var senha= document.getElementById("senha").value;

    if(login ==="admin" && senha ==="admin"){
        alert("Login realizado com sucesso")
        location.href="../index.html"
    }else{
        alert("Usuário ou senha incorreta")
    }
   }

   