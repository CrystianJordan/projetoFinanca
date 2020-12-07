axios.get('http://localhost:5000/cotacoes')
    .then(function (response) {
        console.log(response);
        document.getElementById('dados').innerHTML = response.data;
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log('Terminado');
    });
