import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js";
import { ContaPoupança } from "./conta/ContaPoupança.js";
import { ContaSalario } from "./conta/ContaSalario.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 111222333005, "senha1")
const cliente2 = new Cliente("Alice", 203345524056, "senha2")

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice)

console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)
console.log(`Número de contas correntes: ${ContaCorrente.numeroDeContas}`)

const contaPoupança = new ContaPoupança(cliente1, 1001, 100);
contaPoupança.sacar(10)

console.log(contaPoupança)

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaSalario)


const diretor = new Diretor("Rodrigo", 12345678900, 10000);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 12345670100, 5000);
gerente.cadastrarSenha("abcdefgh")

const cliente = new Cliente("Lais", 78945623139, "234567821");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "abcdefgh");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "234567821")


console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado)

