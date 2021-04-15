'use stric'

const lies = prompt ('Digite os valores de entrada').split(' ');

// Necessario para remover a ultima linha vazia do url
// lines.pop();

const multiplica = (numero1, numero2) => numero1 * numero2;

const produto = lines.map(Number).reduce(multiplica);

console.log (`PROD = ${produto}`);