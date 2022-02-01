//Baseado em um codigo, exiba o produto a ele vinculado

let codigo = parseInt(prompt("Digite o Código:"));
let produto;

switch (codigo) {
    case 1:
        produto = "Coca-Cola";
        break;
    case 2:
        produto = "Sorvete";
        break;
    case 3:
        produto = "Chocolate"
        break;
    case 4:
        produto = "Biscoito";
        break;
    default:
        produto = "Código Inválido";
        break;

}

// if(codigo==1){
//     produto="Coca-Cola";
// }else if(codigo ==2 ){
//     produto="Sorvete"
// }else if (codigo==3){
//     produto="Chocolate"
// }else{
//     produto="Biscoito"
// }
alert(produto)