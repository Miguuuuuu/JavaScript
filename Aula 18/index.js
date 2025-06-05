//function criaPessoa (nome, sobrenome, idade) {
   // return { nome, sobrenome, idade };
//}

//const pessoa1 = criaPessoa('Luiz', 'Miranda' , 25);
//const pessoa2 = criaPessoa('Miguel', 'Soares' , 15);
//const pessoa3 = criaPessoa('João', 'Moreira' , 33);
//const pessoa4 = criaPessoa('Junior', 'Otávio' , 44);
//const pessoa5 = criaPessoa('Davi', 'Silva' , 69);

//console.log(pessoa2.nome, pessoa2.sobrenome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
       console.log(`A minha idade atual é ${this.idade}.`); 
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();