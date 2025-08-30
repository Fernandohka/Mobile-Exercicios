import promptSync from 'prompt-sync';
const prompt = promptSync();

const raio = Number(prompt("Digite o valor do raio do circulo: "))

console.log("AREA = " + (Math.PI * (raio * raio)).toFixed(3))