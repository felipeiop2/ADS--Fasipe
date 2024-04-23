function calcular() {
    let num1 = parseFloat(window.document.getElementById('num1').value)
    let num2 = parseFloat(window.document.getElementById('num2').value)
    let num3 = parseFloat(window.document.getElementById('num3').value)
    let media = (num1+ num2+num3)/3
    let res = window.document.getElementById('res')
    res.innerHTML = `Ola sua media é de ${media.toFixed(2)}` 
    res.innerHTML = `seu valor absoluto é ${Math.abs()}`

}

