
function initPagina(){
    const myKeyValues = window.location.search;
    const urlParams = new URLSearchParams(myKeyValues);
    const param1 = urlParams.get('id');
    console.log("parametro: ",param1)
    nomeScuola = document.getElementById("nomeScuola");
    tipologia = document.getElementById("tipologiaScuola");
    logo = document.getElementById("logoScuola");
    descrizione = document.getElementById("descrizioneScuola");

    if(param1){
        fetch(`https://organic-telegram-56g5wvjggj937jj-1338.app.github.dev/api/scuole/${param1}?populate=*`)
        .then(response => response.json())
        .then(data => {
            console.log("data: ",data)
            nomeScuola.innerText = data.data.attributes.Nome;
            tipologia.innerText = data.data.attributes.Tipo;
            logo.src = `https://organic-telegram-56g5wvjggj937jj-1338.app.github.dev${data.data.attributes.Logo.data.attributes.url}`;
            if(data.data.attributes.Descrizione != null)
                descrizione.innerText = data.data.attributes.Descrizione[0].children[0].text;
        })
    }
    else{
        alert('Scegliere un scuola');
    }
}

initPagina();