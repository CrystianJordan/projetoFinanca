const Request = require('request');
module.exports = {
    getNoticias(request, responseApi) {
        var resp;
        const url = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc5d48946e88478f8b5525cde7d66c73"
        Request.get({
            "headers": { "Content-type": 'application/json' },
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