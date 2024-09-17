const nome = 'Matheus Boccalini';
const sobrenome = 'Toscano';
const idade = 21;
const peso = 60;
const altura = 1.75;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
