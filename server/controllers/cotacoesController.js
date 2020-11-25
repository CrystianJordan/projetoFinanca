const Request = require('request');
module.exports = {

    //pega as cotações da api externa
    getCotacoes(request, responseApi) {
        var resp;
        const key = 'c596e1b5';
        const url = "https://api.hgbrasil.com/finance"
        Request.get({
            "headers": { "Authorization": key, "Content-type": 'application/json' },
            "url": url,
        }, (error, response, body) => {
            if (error) {
                resp = {
                    statusCode: 300,
                    body: 'error na api'
                }

                return responseApi.json(resp);
            }
            resp = body;
            return responseApi.json(resp);
        })

    }

}