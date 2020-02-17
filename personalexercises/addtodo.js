var inputDo = document.getElementById('inputDo')
var inputDoing = document.getElementById('inputDoing')
var inputDone = document.getElementById('inputDone')

var buttonDo = document.getElementById('btnDo')
var buttonDoing = document.getElementById('btnDoing')
var buttonDone = document.getElementById('btnDone')


function criaElemento(inputId, iconParameter, textParamer) {
    var input = inputId
    var icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    icon.style.color = 'grey';
    icon.innerText = iconParameter

    var text = document.createElement('p');
    text.innerText = textParamer;
    text.style.marginTop = '-1px';

    var divLeft = document.createElement('div');
    divLeft.setAttribute('class', 'col s12 l2');
    divLeft.appendChild(icon)

    var divRight = document.createElement('div');
    divRight.setAttribute('class', 'col s12 l10');
    divRight.appendChild(text);

    input.appendChild(divLeft);
    input.appendChild(divRight);

    switch (inputId.id) {
        case 'listDo':
            var bloco = 'Do'
            break
        case 'listDoing':
            var bloco = 'Doing'
            break
        case 'listDone':
            var bloco = 'Done'
            break
    }

    var msgAdicionado = `<span>Item Adicionado no bloco ${bloco}!</span>`;
    M.toast({ html: msgAdicionado });
}

buttonDo.onclick = function () {
    if (inputDo.value == '') {
        alert('Preencha o campo Do!')
    } else {
        criaElemento(document.getElementById('listDo'), 'details', inputDo.value);
        inputDo.value = '';
    }
};
buttonDoing.onclick = function () {
    if (inputDoing.value == '') {
        alert('preencha o campo Doing!')
    } else {
        criaElemento(document.getElementById('listDoing'), 'chat_bubble_outline', inputDoing.value);
        inputDoing.value = '';
    }
};
buttonDone.onclick = function () {
    if(inputDone.value == ''){
        alert('preencha o campo Done!')
    }else{
        criaElemento(document.getElementById('listDone'), 'check', inputDone.value); 
        inputDone.value = '';        
    }
 };
