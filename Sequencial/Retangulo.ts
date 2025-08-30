import promptSync from 'prompt-sync';
const prompt = promptSync();

const base = Number(prompt('Base do retangulo: '))
const altura = Number(prompt('Altura do retangulo: '))

console.log("AREA = " + (base * altura).toFixed(4))
console.log("PERIMETRO = " + (base * 2 + altura * 2).toFixed(4))
console.log("DIAGONAL = " + Math.sqrt(base * base + altura * altura).toFixed(4))