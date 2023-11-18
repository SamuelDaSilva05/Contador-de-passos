function CalcularPassos() {
    let passosInput = document.querySelector('input').value; // Obtém o valor do campo de entrada
    let tamanhoPasso = 0.762;

    // Converte o valor de passosInput para um número
    let passos = parseFloat(passosInput);

    // Verifica se o valor é inválido
    if (isNaN(passos) || passos < 0) {
        alert("Valor inválido. Certifique-se de que o valor seja um número positivo.");
        return;
    }

    let distancia = (passos * tamanhoPasso) / 1000;

    alert(`Você andou ${distancia.toFixed(2)} Km`);
}
