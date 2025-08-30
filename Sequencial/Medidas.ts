import promptSync from 'prompt-sync';
const prompt = promptSync();

const medidaA = Number(prompt("Digite a medida A: "))
const medidaB = Number(prompt("Digite a medida B: "))
const medidaC = Number(prompt("Digite a medida C: "))

console.log("AREA DO QUADRADO = " + (medidaA * medidaA).toFixed(4))
console.log("AREA DO TRIANGULO = " + (medidaA * medidaB / 2).toFixed(4))
console.log("AREA DO TRAPEZIO = " + ((medidaA + medidaB) * medidaC / 2).toFixed(4))