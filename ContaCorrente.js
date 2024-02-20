import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    } 


    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas ++
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Deposito de ${this.cliente.nome} com o valor de R$${valor},00 realizado.`)
        } else {
            console.log("Deposito de valor de 0 ou inferior não são validos.")
        }
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Saque de ${this.cliente.nome} com o valor de R$${valor},00 realizado.`)
            return valor
        } else {
            console.log("Saldo insuficiente.")
            return 0
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }
}
