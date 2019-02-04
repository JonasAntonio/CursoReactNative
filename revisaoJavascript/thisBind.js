const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        // console.log(saudacao) -> erro
        console.log(this.saudacao)
    }
}

pessoa.falar()

// const falar = pessoa.falar

//falar() //conflito entre a OO e a programação funcional

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()