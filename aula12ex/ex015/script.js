function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verfique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crianca-homem.jpeg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-homem.jpeg')
            } else if (idade < 58) {
                // adulto
                img.setAttribute('src', 'adulto-homem.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-homem.jpeg')
            }
        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crianca-mulher.jpeg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.jpeg')
            } else if (idade < 58) {
                // adulto
                img.setAttribute('src', 'adulta-mulher.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'idosa-mulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
