let num = document.getElementById('txtn')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false

    }

}
function inLista(n, l) {
    if (l.indexOf(Number(n))!= -1) {
        return true
        
    }else{
        return false
    }

}


function add() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''

    } else {
        window.alert('Valor invalido')
        
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]                
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} cadastrados</p>`
        res.innerHTML += `<p>valor maior ${maior}</p>`
        res.innerHTML += `<p>valor maior ${menor}</p>`
        res.innerHTML += `<p>valor valor da soma de todos os numeros ${soma}</p>`
        res.innerHTML += `<p>valor da media ${media}</p>`
        
    }

}