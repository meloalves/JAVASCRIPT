var agora = new Date()
var hora = agora.setHours
console.log(`Agora são exatamente ${agora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
