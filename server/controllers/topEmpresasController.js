const Request = require('request');
const FormData = require('form-data');
module.exports = {

    //pega as cotações da api externa
    getTabela(request, responseApi) {
        var resp;

        const url = "http://www.fundamentus.com.br/resultado.php"
        Request.post({
            "json": { "firma_ebit_min": 0, "firma_ebitda_min": 0, "liq_min": 200000, "negociada": "ON", "ordem": 1, "x": 43, "y": 26 },
            "url": url,
            //verifica se a api deu algum erro e retorna a resposta adequada
        }, (error, response, body) => {

            return response;
        })

    }

}