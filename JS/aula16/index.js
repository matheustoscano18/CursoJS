function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Matheus', 'Toscano', 21);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55); 

console.log(pessoa1.nome, pessoa3.nome);