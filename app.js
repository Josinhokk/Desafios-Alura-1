
let hora = document.querySelector('h1');
hora.innerHTML = ('Hora do desafio');
function nome(text){
    console.log(`Olá ${text}`);
}
function numeroDobro(num){
    console.log("o dobro do seu " + num +" é igual a " + (2*num));
}
function media(num1,num2,num3){
    console.log(`A media dos numeros ${num1} e ${num2} e ${num3} é igual a ${((num1+num2+num3)/3)}`);
}
function maiorNum(num1,num2){
    if (num1>num2){
        console.log(`O ${num1} é o maior numero`)
    } else if (num2>num1){
        console.log(`O ${num2} é o maior`)
    }
    else
    {console.log("eles sao iguais")};
}
function clickConsole(){
    console.log("O botão foi clicado");
    console.log("Olá Mundo");
    nome("Dafne");
    numeroDobro(8);
    media(50,100,100);
    maiorNum(50,50);
    imc(100,10);
    dolar(10);
}
function alertaBotao(){
    alert("eu amo JS");
}
function promptBotao(){
    let cidade = prompt("Diga uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você.`);
}
function somaBotao() {
    //usamos parseint pois converte a string dada pelo prompt em um numero inteiro caso queiramos numeros decimais podemos usar parseFloat
    let xnumero = parseInt(prompt("Digite um numero inteiro para a soma"));
    let ynumero = parseInt(prompt("Digite outro numero inteiro para a soma"));
    alert("A soma dos seus números foi " + (xnumero + ynumero));
}

function imc(peso,altura){
    imc = peso/altura
    console.log(`seu imc é ${imc}`)
}

function dolar(dolar){
    reais = dolar*(4.80);
    console.group(`seus ${dolar} se tornaram ${reais} reais!`) 
}