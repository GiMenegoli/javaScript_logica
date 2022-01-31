let n1 = parseFloat(prompt("Digite a primeira Nota"));
let n2 = parseFloat(prompt("Digite a segunda Nota"));
let n3 = parseFloat(prompt("Digite a terceira Nota"));

let media=(n1+n2+n3)/3;

if(media<4){
    document.getElementById('media').innerHTML = `Reprovado com média ${media}`;
}else if(media<7 && media>=4){
    document.getElementById('media').innerHTML = `Em prova final com média ${media}`;
}else{
    document.getElementById('media').innerHTML = `Aprovado com média ${media}`;
}