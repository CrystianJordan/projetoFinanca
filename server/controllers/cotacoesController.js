module.exports = {

    //pega as cotações da api externa
    getCotacoes(request, response) {

        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        const Http = new XMLHttpRequest();
        const url = "https://api.hgbrasil.com/finance"
        const key = 'c596e1b5'
        Http.open('GET', url);
        Http.setRequestHeader('Authorization', key);
        Http.setRequestHeader('Content-type', 'application/json');
        Http.send();
        var resp;
        Http.onreadystatechange = () => {
            console.log(Http.responseText);
            if (Http.readyState == 4 && Http.status == 200) {
                resp = Http.responseText;
            } else {
                resp = {
                    code: 300,
                    body: 'Um erro ocorreu com a requisição'
                }
            }
        }
        return response.json(resp);
    }

}