function calcular(){
    let valor = parseInt(window.document.getElementById("valor").value)
    let res = window.document.getElementById("resultado")
    let litro = (valor / 5.50)
    let distancia = (litro * 12)
    
    res.innerHTML += `Você pode comprar ${litro.toFixed(2)} Litros de gasolina <br>`
    res.innerHTML += `Seu carro pode andar ${distancia.toFixed(2)} KMS`
}