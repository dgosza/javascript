class List{
    constructor(){
        this.data = [] 
    }

    add(data){
        this.data.push(data) 
        console.log("dentro do add " + data)
    }
}


class TodoList extends List{
    constructor(){
        super();
        this.usuario = "Diego";
    }

    mostraUsuario(){
        console.log(this.usuario)
    }

}

var MinhaLista = new TodoList();


document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('oi');
    MinhaLista.mostraUsuario();
}