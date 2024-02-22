import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, já que essa é uma classe abstrata.")
        }

        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
        
    }

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

    depositar(valor) {
        valor = parseFloat(valor.toFixed(2))
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Deposito de ${this.cliente.nome} com o valor de R$${(valor.toFixed(2)).replace('.', ',')} realizado.`)
        } else {
            console.log("Deposito de valor de 0 ou inferior não são validos.")
        }
    }

    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato.")
    }

    _sacar(valor, taxa) {
        const valorSacado = parseFloat((taxa * valor).toFixed(2));

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log(`Saque de ${this.cliente.nome} com o valor de R$${(valorSacado.toFixed(2)).replace('.', ',')} realizado.`)
            return valorSacado
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