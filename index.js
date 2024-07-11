const readline = require('readline'); //Módulo para interação com o usuário via prompt.
const ContaCorrente = require('./contaCorrente');
const ContaPoupanca = require('./contaPoupanca');

// Configuração para entrada e saída via terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contas = []; //Array para armazenar as contas criadas.

//Função para criar uma nova conta.
function criarConta(tipo) {
    rl.question('Nome do titular: ', (titular) => {
        let conta;
        if (tipo === 'corrente') { //verifica o tipo de conta a ser criada.
            conta = new ContaCorrente(titular);
        } else if (tipo === 'poupanca') {
            conta = new ContaPoupanca(titular);
        }
        contas.push(conta); //adiciona a nova conta ao array de contas.
        console.log(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} criada com sucesso!`);
        mostrarMenu(); // exibe o menu novamente após criar a conta.
    });
}

//função para exibir o menu de opções.
function mostrarMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Criar Conta Corrente');
    console.log('2. Criar Conta Poupança');
    console.log('3. Depositar');
    console.log('4. Sacar');
    console.log('5. Consultar Saldo');
    console.log('6. Aplicar Juros (Conta Corrente)');
    console.log('7. Aplicar Rendimento (Conta Poupança)');
    console.log('8. Sair');

    rl.question('Opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                criarConta('corrente'); //chamada para função de criar conta corrente.
                break;
            case '2':
                criarConta('poupanca'); //chamada para função de criar conta poupança.
                break;
            case '3':
                depositar(); // chamada para depositar.
                break;
            case '4':
                sacar(); // chamada para função de sacar
                break;
            case '5':
                consultarSaldo(); // chama para função de consultar saldo
                break;
            case '6':
                aplicarJuros(); // chama para função de aplicar juros.
                break;
            case '7':
                aplicarRendimento(); // chama para função de aplicar rendimento
                break;
            case '8':
                rl.close(); // fecha o readline.
                break;
            default:
                console.log('Opção inválida.');
                mostrarMenu(); // mostra o menu novamente se a opção não for inválida.
        }
    });
}


//função para encontrar conta pelo nome do titular.
function encontrarConta() {
    return new Promise((resolve) => {
        rl.question('Nome do titular: ', (titular) => {
            const conta = contas.find(c => c.titular === titular);
            if (conta) {
                resolve(conta); //retorna a conta encontrada
            } else {
                console.log('Conta não encontrada.');
                mostrarMenu(); //se a conta não for encontrada mostra o menu novamente.
            }
        });
    });
}

//função deposito na conta
async function depositar() {
    const conta = await encontrarConta(); //encontra a conta pelo nome do titular
    rl.question('Valor do depósito: ', (valor) => {
        conta.depositar(parseFloat(valor)); //converte o valor para float e realiza o depósito
        mostrarMenu(); //exibe menu após o depósito concluido
    });
}

//função para sacar valor da conta
async function sacar() {
    const conta = await encontrarConta();
    rl.question('Valor do saque: ', (valor) => {
        conta.sacar(parseFloat(valor));
        mostrarMenu();
    });
}


//função para consultar saldo da conta
async function consultarSaldo() {
    const conta = await encontrarConta();
    conta.consultarSaldo();
    mostrarMenu();
}

//função para aplicar juros na conta corrente
async function aplicarJuros() {
    const conta = await encontrarConta();
    if (conta instanceof ContaCorrente) { //verifica se a conta é corrente
        conta.aplicarJuros(); //aplica juros na conta corrente
    } else {
        console.log('Esta conta não é uma conta corrente.');
    }
    mostrarMenu();
}

//função para aplicar rendimento na conta poupança 
async function aplicarRendimento() {
    const conta = await encontrarConta();
    if (conta instanceof ContaPoupanca) { //verifica se é uma conta poupança
        conta.aplicarRendimento(); //aplica rendimento na conta poupança
    } else {
        console.log('Esta conta não é uma conta poupança.');
    }
    mostrarMenu();
}

mostrarMenu();
