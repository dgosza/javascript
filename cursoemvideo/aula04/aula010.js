var idade = 78;

if (idade < 16) {
    console.log('nao vota!!')
} else if (idade < 18 || idade > 65) {
    console.log('voto opcional!')
} else {
    console.log('vota!')
}


var agora = new Date();
var horas = agora.getHours();
var min = agora.getMinutes();

function getHours() {
    console.log(`Hora Atual: ${horas}:${min}`)
}

if (horas <= 11 && min <= 59) {
    getHours();
    console.log("Bom dia!")
} else if (horas <= 17 && min <= 59) {
    getHours();
    console.log("Boa tarde!")
} else {
    getHours();
    console.log("Boa Noite!")
}