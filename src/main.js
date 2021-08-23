document.getElementById("body").onclick = calc
function calc() {
    let primeiroValor = parseInt (prompt("Digite o primeiro valor: "))
    let operação = (prompt("Qual a operação?"))
    let segundoValor = parseInt (prompt("Digite o segundo valor: "))
    let h2 = document.getElementById("h2")

    if (operação == "/") {
    let resultado = primeiroValor / segundoValor
    h2.innerHTML=(primeiroValor + " / " + segundoValor + " = " +  resultado)
    }
    else if (operação == "*") {
    let resultado = primeiroValor * segundoValor
    h2.innerHTML=(primeiroValor + " X " + segundoValor + " = " +  resultado)
    }
    else if (operação == "+") {
    let resultado = primeiroValor + segundoValor
    h2.innerHTML=(primeiroValor + " + " + segundoValor + " = " +  resultado)
    }
    else if (operação == "-") {
    let resultado = primeiroValor - segundoValor
    h2.innerHTML=(primeiroValor + " - " + segundoValor + " = " +  resultado)
    }
    else {h2.innerHTML=("Opção Inválida")}
};

    
