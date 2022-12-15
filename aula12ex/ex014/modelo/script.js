function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 15
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        img.src = 'morning.jpeg'
        document.body.style.background = 'green'
    } else if (hora >=12 && hora < 18) {
        img.src = 'afternoon.jpeg'
        document.body.style.background = 'orange'
    } else {
        img.src = 'nigth.jpeg'
        document.body.style.background = 'black'
    }
}
