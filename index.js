document.getElementById("texto").innerHTML = "Aprendendo programação web com  <b>JS</b>";
//(pegar dados por documento)
//(declara função em bloco)
/*declarando variáveis - 
var nome, sobrenome, nomeCompleto, idade;
nome = "Danielly";
sobrenome = "Monteiro"
nomeCompleto = nome + " " + sobrenome;
some = idade + 10;
pessoa = nome +  " " + soma;
document.getElementById("texto").innerHTML = pessoa;
let - não pode ser alterada, pode ser declarado dentro ou fora de um bloco ATENÇÃO
const - nunca pode mudar.
var - pode ser redeclaráveis, É global


var idade, eleitor, resultado;
operador condicional ternário
var idade, eleitor;
idade=18;
eleitor= (idade<18) ? "Não, eleitor":"sim, eleitor";
alert('A resposta é: ' + ' a idade é de: ' + idade);
resultado = (idade > 18 || idade < 70);
alert(resultado);

FUNÇÕES ----->
function soma(valor1,valor2){
return valor1 + valor2;
document.getElementById("texto").innerHTML = soma(10, 23); --->invocando funções
}

funtion realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar; ----> função
}
    var valorReal = 
    var cotacao = 
    var total = realParaDolar(valorReal, cotacao);
    alert("O valor em real é R$: " + valorReal + " o valor em dólar U$ é: " + total);

 MÉTODOS --------> propriedade que tem um método dentro
 const carro = {
 marca: "ford",
 modelo: "ka"
 ano: 2015,
 placa: "ABC-1234",
 buzina: function()  {alert('Bi')}
 };
 concole.log(carro.ano);   

 EVENTOS ----->ações disparadas pelo usuário
 */
function eventoClick(){
    document.body.style.backgroundColor = "#22D4FD";
    document.body.style.color = "black";
}