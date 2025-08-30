import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt("Nome: ")
const valor = Number(prompt("Valor por hora: "))
const hrs = Number(prompt("Horas trabalhadas: "))

console.log(`O pagamento para ${nome} deve ser ${valor * hrs} `)
