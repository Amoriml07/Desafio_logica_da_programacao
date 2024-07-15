// tipos de personagens(mago, guerreiro,monge,ninja)
// ataques resppectivos (Usou magia, usou espada, usou artes marcias, usou shuriken)
class caracterizacaoPersonagem{
    constructor(nome, idade, tipo, atacar) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.atacar = atacar;
    }

    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.atacar}`)
    }

}

let heroiGuerreiro = new caracterizacaoPersonagem("Inosuke", "18", "Guerreiro", "usou espada")
let heroiMago = new caracterizacaoPersonagem("Nezuko", "15", "Mago", "usou magia")



heroiGuerreiro.escrever()
heroiMago.escrever()

