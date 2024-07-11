const Conta = require('./conta'); // importa a classe base Conta.

class ContaCorrente extends Conta { //Herança de Conta.
    constructor(titular, saldo, juros = 0.02) {
        super(titular, saldo); //Chama o construtor da classe base.
        this.juros = juros; //Taxa de juros da conta corrente.
    }

    //Método para aplicar juros ao saldo da cota corrente.
    aplicarJuros() {
        this.saldo += this.saldo * this.juros; //Calcula e adiciona os juros ao saldo
        console.log(`Juros aplicados. Saldo atual: R$${this.saldo}`);
    }
}

//Exporta a classe contaCorrente para usar em outros arquivos.
module.exports = ContaCorrente;
