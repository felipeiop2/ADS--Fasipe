
function clicar(){
    let num1 = window.prompt('Digite um numero')
    let num2 = window.prompt('digite outro numero')
    let num3 = parseFloat(num1) + parseFloat(num2)
    let res = window.document.getElementById('res')
    res.innerHTML = `o resultado de ${num1} e ${num2} seria ${num3} `
}