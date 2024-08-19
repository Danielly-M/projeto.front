class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    conta;
    saldo;
    sacar(valor){ //método passando valor*operação
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }

}
const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "00011122233";
cliente1.agencia = 1001;
cliente1.conta = 44881;
cliente1.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);
//console.log(cliente1);



