const Conta = require('./conta');

class ContaPoupanca extends Conta { // Herança de Conta.
    constructor(titular, saldo, rendimento = 0.05) {
        super(titular, saldo); // Chama o construtor da classe base.
        this.rendimento = rendimento; //Taxa de rendimento da conta Poupança.
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.rendimento; // Calcula e adiciona o rendimento ao saldo.
        console.log(`Rendimento aplicado. Saldo atual: R$${this.saldo}`);
    }
}

// Exporta a classe.
module.exports = ContaPoupanca;
