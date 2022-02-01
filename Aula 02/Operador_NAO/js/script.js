//Leia um login e se este não fot o administrador exiba a
//mensagem: Sem poderes administrativos

let usuario=prompt("Usuário");
if(!(usuario!="Administrador")){
    alert("Sem Poderes administrativos!");
}else{
    alert("Olá Administrador!")
}