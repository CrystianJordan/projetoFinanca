axios.get('http://localhost:5000/cotacoes')
    .then(function (response) {
        
        let converteJson = JSON.parse(response.data);
        console.log(converteJson);

        document.getElementById('cotacoes1').innerHTML = "Moeda: " + converteJson.results.currencies.ARS.name;
        document.getElementById('cotacoes2').innerHTML = "Preço: " + converteJson.results.currencies.ARS.buy;
        document.getElementById('cotacoes3').innerHTML = "Variação: " + converteJson.results.currencies.ARS.variation;

        document.getElementById('cotacoes4').innerHTML = "Moeda: " + converteJson.results.currencies.EUR.name;
        document.getElementById('cotacoes5').innerHTML = "Preço: " + converteJson.results.currencies.EUR.buy;
        document.getElementById('cotacoes6').innerHTML = "Variação: " + converteJson.results.currencies.EUR.variation;

        document.getElementById('cotacoes7').innerHTML = "Moeda: " + converteJson.results.currencies.GBP.name;
        document.getElementById('cotacoes8').innerHTML = "Preço: " + converteJson.results.currencies.GBP.buy;
        document.getElementById('cotacoes9').innerHTML = "Variação: " + converteJson.results.currencies.GBP.variation;

        document.getElementById('cotacoes10').innerHTML = "Moeda: " + converteJson.results.currencies.USD.name;
        document.getElementById('cotacoes11').innerHTML = "Preço: " + converteJson.results.currencies.USD.buy;
        document.getElementById('cotacoes12').innerHTML = "Variação: " + converteJson.results.currencies.USD.variation;

        document.getElementById('cotacoes13').innerHTML = "Nome: " + converteJson.results.stocks.CAC.name;
        document.getElementById('cotacoes14').innerHTML = "Local: " + converteJson.results.stocks.CAC.location;
        document.getElementById('cotacoes15').innerHTML = "Pontos: " + converteJson.results.stocks.CAC.points;

        document.getElementById('cotacoes16').innerHTML = "Nome: " + converteJson.results.stocks.IBOVESPA.name;
        document.getElementById('cotacoes17').innerHTML = "Local: " + converteJson.results.stocks.IBOVESPA.location;
        document.getElementById('cotacoes18').innerHTML = "Pontos: " + converteJson.results.stocks.IBOVESPA.points;

        document.getElementById('cotacoes19').innerHTML = "Nome: " + converteJson.results.stocks.NASDAQ.name;
        document.getElementById('cotacoes20').innerHTML = "Local: " + converteJson.results.stocks.NASDAQ.location;
        document.getElementById('cotacoes21').innerHTML = "Pontos: " + converteJson.results.stocks.NASDAQ.points;

        document.getElementById('cotacoes22').innerHTML = "Nome: " + converteJson.results.stocks.NIKKEI.name;
        document.getElementById('cotacoes23').innerHTML = "Local: " + converteJson.results.stocks.NIKKEI.location;
        document.getElementById('cotacoes24').innerHTML = "Pontos: " + converteJson.results.stocks.NIKKEI.points;

    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log('Terminado');
    });
