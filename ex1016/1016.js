'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');
const ValorEntrada = Number(lines [0]);

const qtdMinutos = (60 * ValorEntrada) / 30;

console.log(`${qtdMinutos.toFixed(0)} minutos`);