/* 
Miguel Soares tem 15 anos, pesa 51kg tem 1.79 de altura e meuu IMC é de 15.917106207671422
Miguel nasceu em 2010
*/

const nome = 'Miguel'
const sobrenome = 'Soares'
const idade = 15;
const peso = 51;
const alturaEmM = 1.79;
let indeceMassaCorporal ; // peso / (altura * altura)
indeceMassaCorporal = peso / (alturaEmM * alturaEmM)
let anoNascimento; // Ano atual - idade
anoNascimento = 2025 - idade;

// +

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indeceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`)
