export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    conta;
    _cliente;
    _saldo;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.Cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor){ //método passando valor*operação
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(this._saldo > 0){
            this._saldo += valor;
            return valor;
    
        }
    }
    transferir(valor, conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}
