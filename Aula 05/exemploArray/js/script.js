// const carros=["Renegate", "Toro", "Ranger"];
// alert(carros);
// alert(carros[0]);
// carros[0]="Onix";
// alert(carros[0]);
// const carros=[
//     "Renegate",
//     "Toro", 
//     "Ranger"
// ];

// const carros=[];
// carros[0]="Renegate";
// carros[1]= "Toro";
// carros[2]="Ranger";

// const carros = new Array("Renegate","Toro", "Ranger")

// const meuArray= [];
// const carros=["Renegate", "Toro", "Ranger"];
// const hora = new Date().getTime().toPrecision();
// meuArray[0]= hora;
// meuArray[1]=carros;
// alert(meuArray)

// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// alert(frutas);
// frutas.push("Morango");
// alert(frutas);

// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// alert(frutas);
// frutas.pop();
// alert(frutas);

// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// alert(frutas);
// frutas.shift();
// alert(frutas);


// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// alert(frutas);
// frutas.unshift("Morango");
// alert(frutas);


// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// alert(frutas);
// delete frutas[1];
// alert(frutas);


// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// alert(frutas);
// frutas.splice(2,0,"Morango", "Kiwi");
// alert(frutas);

// const frutas=["Banana", "Laranja", "Maça", 'Manga'];
// const verduras=["Couve", "Brócolis"];

// const comidas=frutas.concat(verduras);
// alert (comidas);


// const comidas=["Banana", "Laranja", "Maça", 'Manga', "Couve", "Brócolis"];
// const verduras=comidas.slice(4);
// alert (verduras);
// alert(comidas);

// const comidas=["Banana", "Laranja", "Maça", 'Manga', "Couve", "Brócolis"];
// comidas.sort();
// alert(comidas);
// comidas.reverse();
// alert(comidas)

// const comidas=["Banana", "Laranja", "Maça", 'Manga', "Couve", "Brócolis"];
// let listaComidas = "";
// for(let i=0; i<comidas.length; i++){
//     listaComidas=comidas[i]+ "<br>"
// }

// document.getElementById("saida").innerHTML = listaComidas;

// const comidas=["Banana", "Laranja", "Maça", 'Manga', "Couve", "Brócolis"];
// let listaComidas = "";
// comidas.forEach(criarLista);
// document.getElementById("saida").innerHTML=listaComidas;

// function criarLista(itemVetor){
//     listaComidas+=itemVetor + "<br>";
// }

const comidas=["Banana", "Laranja", "Maça", 'Manga', "Couve", "Brócolis"];
let listaComidas = "";
comidas.map(criarLista);
document.getElementById("saida").innerHTML=listaComidas;

function criarLista(itemVetor){
    listaComidas+=itemVetor + "<br>";
}