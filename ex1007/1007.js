'use stric';

const lines = prompt ('Digite os valores de entrada').split(' ');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

var DIFERECA = parseInt((A * B) - (C * D));

console.log("DIFERENCA = " + DIFERECA);