'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');

var nomeVendedor = String(lines.shift());
var salarioFixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var comissao = vendas * 0,15;

var novoSalario = salarioFixo + comissao;

console.log("TOTAL = R$ " + novoSalario.toFixed(2)); 