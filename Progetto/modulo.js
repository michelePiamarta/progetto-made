function scuola(nomeScuola){
    fetch('https://organic-telegram-56g5wvjggj937jj-1338.app.github.dev/api/scuole')
    .then(response => response.json())
    .then(data => {
        for(let scuola of data.data){
            if(scuola.attributes.Nome != null)
                //console.log(scuola.attributes.Descrizione[0].children[0].text)
                if(scuola.attributes.Nome == nomeScuola){
                    window.location.href = "/scuole?id=" + scuola.id
                }
            }
    })
}

function calcolaPunteggio() {
    var sliders = document.querySelectorAll('.slider');
    var paroleChiaveArtistiche = ["creatività", "disegnare", "grafica", "immaginazione"];
    var paroleChiaveScientifiche = ["scientifiche", "logica", "matematica"];
    var paroleChiaveLinguistiche = ["lingue", "viaggiare", "inglese"];
    var paroleChiaveMade = ["informatica","laboratorio","oggetti"];
    var paroleChiaveDepero = ["disegnare","creatività","grafica","immaginazione"];
    var paroleChiaveUPT = ["mano","meccanica","elettronica"];
    var paroleChiaveAlberghiero = ['cucinare',"cuoco"];
    var paroleChiaveIT = ["informatica","laboratorio"];
    var paroleChiaveSportivo = ["sport","muovermi","fisica"];
    var paroleChiaveBarelli = ["bellezza","make-up","accaciature"];
    var paroleChiaveIPIA = ["banchi","pratica","trovare","lavoro"];
    var paroleChiaveSTEAM = ["americane"];
    /* var isArtistiche = false;
    var isScientifiche = false;

    // Itera su tutti gli slider
    sliders.forEach(function(slider) {
        var value = parseInt(slider.value);
        var keyword = slider.previousElementSibling.textContent.toLowerCase(); // Ottieni il testo della domanda e trasformalo in minuscolo

        // Controlla se la barra dello slider è posizionata tutta a destra e se la domanda contiene parole chiave pertinenti
        if (value >=3 && (paroleChiaveArtistiche.some(parola => keyword.includes(parola)) || paroleChiaveScientifiche.some(parola => keyword.includes(parola)))) {
            // Se la domanda contiene parole chiave per l'ambito artistico, imposta la variabile corrispondente a true
            if (paroleChiaveArtistiche.some(parola => keyword.includes(parola))) {
                isArtistiche = true;
            }
            // Se la domanda contiene parole chiave per l'ambito scientifico, imposta la variabile corrispondente a true
            if (paroleChiaveScientifiche.some(parola => keyword.includes(parola))) {
                isScientifiche = true;
            }
        }
    }); */

    let nArtistico = 0;
    let nScientifico = 0;
    let nLinguistico = 0;
    let nMade = 0;
    let nDepero = 0;
    let nUPT = 0;
    let nAlberghiero = 0;
    let nIT = 0;
    let nSportivo = 0;
    let nBarelli = 0;
    let nIPIA = 0;
    let nSTEAM = 0;

  
    sliders.forEach(function(slider) {
        var value = parseInt(slider.value);
        var keyword = slider.previousElementSibling.textContent.toLowerCase(); // Ottieni il testo della domanda e trasformalo in minuscolo

        if (value >=3 && (paroleChiaveArtistiche.some(parola => keyword.includes(parola))) || 
        paroleChiaveScientifiche.some(parola => keyword.includes(parola)) || 
        paroleChiaveLinguistiche.some(parola => keyword.includes(parola)) || 
        paroleChiaveMade.some(parola => keyword.includes(parola)) || 
        paroleChiaveDepero.some(parola => keyword.includes(parola)) || 
        paroleChiaveUPT.some(parola => keyword.includes(parola)) || 
        paroleChiaveAlberghiero.some(parola => keyword.includes(parola)) || 
        paroleChiaveIT.some(parola => keyword.includes(parola)) || 
        paroleChiaveSportivo.some(parola => keyword.includes(parola)) || 
        paroleChiaveBarelli.some(parola => keyword.includes(parola)) ||
        paroleChiaveIPIA.some(parola => keyword.includes(parola)) ||
        paroleChiaveSTEAM.some(parola => keyword.includes(parola)))
        {
            if (paroleChiaveArtistiche.some(parola => keyword.includes(parola))) {
                nArtistico++;
            }
            if (paroleChiaveScientifiche.some(parola => keyword.includes(parola))) {
                nScientifico++;
            }
            if (paroleChiaveLinguistiche.some(parola => keyword.includes(parola))) {
                nLinguistico++;
            }
            if (paroleChiaveMade.some(parola => keyword.includes(parola))) {
                nMade++;
            }
            if (paroleChiaveDepero.some(parola => keyword.includes(parola))) {
                nDepero++;
            }
            if (paroleChiaveUPT.some(parola => keyword.includes(parola))) {
                nUPT++;
            }
            if (paroleChiaveAlberghiero.some(parola => keyword.includes(parola))) {
                nAlberghiero++;
            }
            if (paroleChiaveIT.some(parola => keyword.includes(parola))) {
                nIT++;
            }
            if (paroleChiaveSportivo.some(parola => keyword.includes(parola))) {
                nSportivo++;
            }
            if (paroleChiaveBarelli.some(parola => keyword.includes(parola))) {
                nBarelli++;
            }
            if (paroleChiaveIPIA.some(parola => keyword.includes(parola))) {
                nIPIA++;
            }
            if (paroleChiaveSTEAM.some(parola => keyword.includes(parola))) {
                nSTEAM++;
            }
        }
    });

    let nArray = [
        { name: 'Liceo Depero', value: nArtistico },
        { name: 'Liceo Antonio Rosmini', value: nScientifico },
        { name: 'Liceo Antonio Rosmini', value: nLinguistico },
        { name: 'Scuola Professionale CFP Made++', value: nMade },
        { name: 'Liceo Depero', value: nDepero },
        { name: 'Scuola Professionale CFP UPT', value: nUPT },
        { name: 'Istituto Formazione Professionale Alberghiero', value: nAlberghiero },
        { name: 'Istituto Tecnico Tecnologico Marconi', value: nIT },
        { name: 'Liceo Antonio Rosmini', value: nSportivo },
        { name: 'Scuola Professionale CFP Barelli', value: nBarelli },
        { name: 'Scuola Professionale CFP Made++', value: nIPIA },
        { name: 'Liceo Steam Rovereto', value: nSTEAM}
    ];

    let biggest = nArray.reduce((max, obj) => obj.value > max.value ? obj : max);
    let maxVariableName = biggest.name;

    scuola(maxVariableName)
}