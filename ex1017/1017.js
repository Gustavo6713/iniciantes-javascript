'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');
const tempoGasto = Number(lines [0]);
const velocidadeMedia = Number(lines [1]);

const tottalPercorrido = tempoGasto * velocidadeMedia;
const qtdCombustivelGasto = tottalPercorrido / 12;

console.log(qtdCombustivelGasto.toFixed(3));