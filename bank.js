
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", "00111122233");
const cliente2 = new Cliente("Roberto", "11122233344");

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(1002, cliente2);
conta2._saldo = 0;
 
contaCorrenteRicardo._saldo = 100;
conta2._saldo = 2;
console.log(conta2);
