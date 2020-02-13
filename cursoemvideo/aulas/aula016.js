var amigo = {
    nome: 'jose',
    sexo: 'm',
    peso: 84.4,
    engordar(p=0){
        console.log('engordou!')
        this.peso += p
    }
}

console.log(` Amigo ${amigo.nome} pesa ${amigo.peso} `)

amigo.engordar(100)

console.log(` Amigo ${amigo.nome} pesa ${amigo.peso} `)