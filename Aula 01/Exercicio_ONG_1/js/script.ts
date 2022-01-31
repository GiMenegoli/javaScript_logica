let kmInicial = parseFloat(prompt("Quantos quilometros tinha no inicio da viagem? "));
let kmFinal = parseFloat(prompt("Quantos quilometros tinha no final da viagem? "));
let litro = parseFloat(prompt("Quantos litros foram abastecido? "));

let resultdo = (kmFinal - kmInicial)/litro;



alert(`Este veiculo faz: ${resultdo}km por litro`);