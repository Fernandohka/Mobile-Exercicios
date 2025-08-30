import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco = Number(prompt("Preço unitário do produto: "))
const qtd = Number(prompt("Quantidade comprada: "))
const dinheiro = Number(prompt("Dinheiro recebido: "))

console.log("TROCO = " + (dinheiro - (preco * qtd)).toFixed(2))
