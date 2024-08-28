let lista = window.document.getElementById('flista')
let valores = []

function verificar(){
 let idade = parseInt(window.document.getElementById("idade").value)  
 let nome = window.document.getElementById("nome").value 
 let res = window.document.getElementById("res")
    if(idade >= 18){
        res.innerHTML = `${nome} Voce é maior de idade`
    } else {
        res.innerHTML = ` ${nome} voce é menor de idade`
    }

}