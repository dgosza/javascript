var listElement = document.querySelector('#app ul');
var inputelement = document.querySelector('#app input');
var button = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodo(){

    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);

        linkElement.appendChild(linkText);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos+ ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function adiciona(){
    var conteudo = inputelement.value;
    todos.push(conteudo);
    inputelement.value = '';
    renderTodo();
    saveToStorage();
}
button.onclick = adiciona;

function deleteTodo(posicao){
    todos.splice(posicao, 1);
    renderTodo();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));

}