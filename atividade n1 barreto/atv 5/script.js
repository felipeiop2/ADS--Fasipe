
function processarValores(A, B) {
    let C;

    
    if (A === B) {
        
        C = A + B;
    } else {
        
        C = A * B;
    }

    return C;
}


function calcularResultado(event) {
    event.preventDefault(); 

    
    let A = parseInt(document.getElementById("valorA").value);
    let B = parseInt(document.getElementById("valorB").value);

    
    let C = processarValores(A, B);

   
    document.getElementById("resultado").innerText = `O valor de C é: ${C}`;
}


document.getElementById("formCalculo").addEventListener("submit", calcularResultado);