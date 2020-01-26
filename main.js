var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.github.com/users/dieezs');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 ){
        console.log(JSON.parse(xhr.responseText));
    }
}