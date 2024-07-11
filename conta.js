class Conta {
    //Contrutor para inicializar os atributos titular e saldo.
    constructor(titular, saldo = 0) {
        this.titular = titular; // Nome do titular da conta.
        this.saldo = saldo; //Saldo inicial da conta, sendo o padrão 0.
    }

    //Método para depositar valor na conta.
    depositar(valor) {
        if (valor > 0) { // verifica se o valor do depósito é positivo.
            this.saldo += valor; // Adiciona valor ao saldo.
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Valor de depósito inválido.');
        }
    }
    
    //Método para sacar valor da conta.
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) { // verifica se valor do saque é positivo.
            this.saldo -= valor; // subtrai valor do saldo
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente ou valor de saque inválido.');
        }
    }
    
    //Método para consultar o saldo da conta.
    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

//Exporta a classe Conta para outros arquivos.
module.exports = Conta;
