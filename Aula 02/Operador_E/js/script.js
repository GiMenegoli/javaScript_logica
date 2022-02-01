let login=prompt("Login:");
let password=prompt("Senha:");
//Para permitir o login deve-se entrar com as credenciais
//ADMIN senha: admin123

if(login == "ADMIN" && password=="admin123"){
    alert("Acesso autorizado!");
}else{
    alert("Acesso negado!");
}