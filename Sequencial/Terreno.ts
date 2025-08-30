import promptSync from 'prompt-sync';
const prompt = promptSync();

const largura = Number(prompt('Digite a largura do terreno: '))

const comprimento = Number(prompt('Digite a comprimento do terreno: '))

const valor = Number(prompt('Digite e o valor do metro quadrado: '))

const area = largura * comprimento

console.log("Area do terreno = " + area.toFixed(2))

console.log("Preco do terreno = " + (area * valor).toFixed(2))