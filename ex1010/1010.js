'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');

const idPecal = Number(lines [0]);
const qtdPecal = Number(lines [1]);
const valorUnitarioPecal1 = Number(lines [2]);

const idPecal2 = Number(lines [3]);
const qtdPecal2 = Number(lines [4]);
const valorUnitarioPecal2 = Number(lines [5]);

const valorTotalPeca1 = qtdPecal * valorUnitarioPecal1;
const valorUnitarioPecal2 = qtdPecal2 * valorUnitarioPecal2;

const valorTotalApagar = valorUnitarioPecal1 + valorUnitarioPecal2;

console.log (`VALOR A PAGAR: R$ ${valorTotalApagar.toFixed(2)}`);