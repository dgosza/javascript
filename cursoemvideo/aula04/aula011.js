// EXERCICIO DE SWITCH PARA OS DIAS DA SEMANA

var day = new Date().getDay();

switch (day) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    case 7:
        console.log("Sabado")
        break;
    default:
        console.log('error 440')
        console.log('specify correctly the day.')
        break
}