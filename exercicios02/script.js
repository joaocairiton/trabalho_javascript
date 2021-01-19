function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados novamente ')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 2) {
                //crianca
                img.setAttribute('src', 'bebeHomem.png')

            } else if (idade < 10) {
                //jovem
                img.setAttribute('src', 'criancaHomem.png')
            } else if (idade < 20) {
                //adulto
                img.setAttribute('src', 'jovemHomem.png')
            } else if(idade < 50) {
                //idoso
                img.setAttribute('src', 'adultoHomem.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            genero = 'homem'
            if (idade >= 0 && idade < 2) {
                //crianca
                img.setAttribute('src', 'bebeMulher.png')

            } else if (idade < 10) {
                //jovem
                img.setAttribute('src', 'criancaMulher.png')
            } else if (idade < 20) {
                //adulto
                img.setAttribute('src', 'jovemMulher.png')
            } else if(idade < 50) {
                //idoso
                img.setAttribute('src', 'adultoMulher.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}