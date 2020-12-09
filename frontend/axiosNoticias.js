function carregarNoticias(){
empresa = document.getElementById("empresa").value;
console.log(empresa)
url = "http://localhost:5000/noticias";
if(empresa!=""){
    url+='?empresa='+empresa;
}
axios.get(url)
    .then(function (response) {
        var obj = JSON.parse(response.data);
        var btn=`<div class="lista">
        <cente>`;
        obj.articles.forEach(element => {
                btn += `
                    <div onclick="abrirPagina('`+element.url+`')" class="card">
                        <span class="titulo">`+element.title+`</span>
                        <div>
                            <div class="resumo">`+element.description+`</div>
                        </div>
                    </div>
                `;

        });
        btn+=`</div>`;
        document.getElementById('teste').innerHTML = btn;
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log('Terminado');
    });
}
    function abrirPagina(pagina){
        window.open(pagina);
    }

    