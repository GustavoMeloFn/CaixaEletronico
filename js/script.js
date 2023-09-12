var saldo = 100.5; //Variavel Global
var inserir_senha;
var senha = '3589'; //Senha Global
let nomeUsuario = prompt('Seja bem vindo, qual é o seu nome?');

function inicio() {
    let escolha = prompt('Selecione uma opção: \n 1.) Saldo \n 2.) Extrato \n 3.) Saque \n 4.) Deposito \n 5.) Transferência \n 6.) Sair');
    escolha = parseInt(escolha);

    switch (escolha) {
        case 1:
            ver_saldo();
            brake;
        case 2:
            ver_extrato();
            brake;
        case 3:
            fazer_saque();
            brake;
        case 4:
            fazer_deposito();
            brake;
        case 5:
            fazer_transferencia();
            brake;
        case 6:
            sair();
            brake;
        default:
            erro();
    }
}

function ver_saldo() {

    inserir_senha = prompt('Insira a sua senha: ');

    if (inserir_senha === senha) {
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    } else {
        alert('Senha incorreta');
        ver_saldo();
    }
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number --> Isso é um não-número?
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número.');
        fazer_deposito();
    } else if (deposito <= 0) {
        alert('Operação não autorizada');
        fazer_deposito();
    } else {
        saldo += deposito;
        //saldo = saldo + deposito;
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    }
}

function fazer_saque() {
    inserir_senha = prompt('Insira a sua senha');

    if (inserir_senha === senha) {
        var saque = parseFloat(prompt('Qual o valor para saque?'));

        if (isNaN(saque) || saque === '' || saque > saldo || saque <= 0) {
            alert('Operação não autorizada');
            alert('Por favor, informe um número.');
            fazer_saque();
        } else {
            saldo -= saque;
            //saldo = saldo - saque;
            alert('Seu saldo atual é: ' + saldo);
            inicio();
        }

    } else {
        alert('Senha incorreta');
        fazer_saque();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}

function ver_extrato() {
    inserir_senha = prompt('Insira a sua senha: ');

    if (inserir_senha === senha) {
        alert('Extrato: \n' + '11-05-2023: Netflix R$50,20 \n' + '10-05-2023: Açougue R$175,50 \n' + '09-05-2023: Mercadinho R$23,99 \n' + '08-05-2023: Steam R$99,00');
        inicio();
    } else {
        alert('Senha incorreta');
        ver_extrato();
    }
}

function fazer_transferencia() {
    inserir_senha = prompt('Insira a sua senha: ');

    if (inserir_senha === senha) {
        var fake_account = parseInt(prompt('Insira o número da conta para a transferência:'));
        var transferencia = parseFloat(prompt('Qual o valor que deseja tranferir?'));

        if (isNaN(transferencia) || transferencia === '') {
            alert('Operação não autorizada');
            alert('Por favor, informe um número.');
            fazer_transferencia();
        } else if (transferencia > saldo) {
            alert('Operação não autorizada');
            fazer_transferencia();
        } else if (transferencia <= 0) {
            alert('Operação não autorizada');
            fazer_transferencia();
        } else if (isNaN(fake_account) || fake_account === '') {
            alert('Conta inválida');
            fazer_transferencia();
        } else {
            saldo -= transferencia;
            //saldo = saldo - transferencia;
            alert('Seu saldo é: ' + saldo);
            inicio();
        }
    } else {
        alert('senha incorreta');
        fazer_transferencia();
    }
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nomeUsuario + ', foi um prazer ter você por aqui!');
        window.close();
    } else {
        inicio();
    }
}

inicio();
