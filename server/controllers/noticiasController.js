const Request = require('request');
module.exports = {
    getNoticias(request, responseApi) {
        var resp;
        console.log(request.query)
        var url = "http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=bc5d48946e88478f8b5525cde7d66c73";
        if(request.query.empresa){
            url+="&q="+request.query.empresa;
        }
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