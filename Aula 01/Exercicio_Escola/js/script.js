let ac = parseFloat(prompt("Qual sua nota AC?"));
let avaliacaoGeral = parseFloat(prompt("Qual sua nota da Avaliação Geral?"));
let avalicaoTrimestral = parseFloat(prompt("Qual sua nota trimestal?"));

let resultado = (ac*2+avaliacaoGeral+avalicaoTrimestral*7)/10

alert(`Média: ${resultado}`);