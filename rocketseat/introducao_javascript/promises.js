axios.get('https://api.github.com/users/dieezs')
    .then(function (respose){
        console.log(respose);
    })
    .catch(function(error){
        console.warn(error);
    });
