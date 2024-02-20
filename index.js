import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 111222333005)
const cliente2 = new Cliente("Alice", 203345524056)

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);


contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice)


console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)
console.log(ContaCorrente.numeroDeContas)


