import promptSync from 'prompt-sync';
const prompt = promptSync();

const dist = Number(prompt("Distancia percorrida: "))
const comb = Number(prompt("Combustível gasto: "))

console.log("Consumo medio = " + (dist / comb).toFixed(3))
