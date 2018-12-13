const saudacao = 'Opa' //contexto léxico 1 (local físico no código o qual a variavel foi declarada)

function exec() {
    const saudacao = 'Falaaaaa' //contexto léxico 2 (local físico no código o qual a variavel foi declarada)
    return saudacao
}

//objetos são grupos alinhados de pares chave/valor
const cliente = {
    nome: 'Jonas',
    idade: '20',
    peso: '75',
    endereco: {
        logradouro: 'Minha Rua',
        numero: 1234
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)