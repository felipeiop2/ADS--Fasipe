function calcularQuadrado(numero) {
    return numero * numero;
}


function calcularQuadrados(event) {
    event.preventDefault();

    let resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; 

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(document.getElementById(`numero${i}`).value);
        let quadrado = calcularQuadrado(numero);
        resultados.innerHTML += `<p>O quadrado de ${numero} é ${quadrado}</p>`;
    }
}


document.getElementById("formQuadrados").addEventListener("submit", calcularQuadrados);