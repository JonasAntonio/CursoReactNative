//recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//extrai nome e idade de pessoa
const { nome, idade } = pessoa

const { nome: n, idade: i } = pessoa

console.log(nome, idade)
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa

console.log(logradouro, numero, cep)

//erro
/*
const { conta: {ag, num} } = pessoa
console.log(ag, num)
*/