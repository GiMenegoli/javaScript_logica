let doacao = parseFloat(prompt("Digite o valor da doação em dólares"));
let valorDolar = parseFloat(prompt("Digite o valor da cotação em dólares"));
let valorEmReais = doacao*valorDolar;
alert(`Valor covertido: R$${valorEmReais}`);