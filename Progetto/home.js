
function cerca(){
    riscontri = [];
    ricerca = document.getElementById("ricerca").value.toLowerCase();
    fetch('https://organic-telegram-56g5wvjggj937jj-1338.app.github.dev/api/scuole')
    .then(response => response.json())
    .then(data => {
        for(let scuola of data.data){
            if(scuola.attributes.Descrizione != null)
                //console.log(scuola.attributes.Descrizione[0].children[0].text)
                if(scuola.attributes.Descrizione[0].children[0].text.includes(ricerca)){
                    riscontri.push(scuola);
                }
            }
            if(riscontri != [])
                creaDropdownScuola(riscontri);
        })
}

function creaDropdownScuola(riscontri){
    div = document.getElementById("ricercaDropdown")
    console.log(riscontri)
    for(let riscontro of riscontri){
        console.log(riscontro)
        a = document.createElement("a");
        a.innerText = riscontro.attributes.Nome;
        a.href = `scuole.html?id=${riscontro.id}`;
        div.appendChild(a);
    }
}

function inputListener(){
    const input = document.getElementById("ricerca");
    input.addEventListener('keyup', () => {
        document.getElementById("ricercaDropdown").innerHTML = "";
        if(input.value.length > 0)
            creaDropdownScuola(cerca());
        if(input.value.length == 0)
            document.getElementById("ricercaDropdown").innerHTML = "";
        
    });
}

inputListener();

const button1 = document.getElementById('b1');
const image1 = document.getElementById('i1');

    // Add event listener for hovering over the button
    button1.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image1.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button1.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image1.style.display = 'none';
    });

const button2 = document.getElementById('b2');
const image2 = document.getElementById('i2');

    // Add event listener for hovering over the button
    button2.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image2.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button2.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image2.style.display = 'none';
    });

const button3 = document.getElementById('b3');
const image3 = document.getElementById('i3');

    // Add event listener for hovering over the button
    button3.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image3.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button3.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image3.style.display = 'none';
    });

const button4 = document.getElementById('b4');
const image4 = document.getElementById('i4');

    // Add event listener for hovering over the button
    button4.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image4.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button4.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image4.style.display = 'none';
    });

const button5 = document.getElementById('b5');
const image5 = document.getElementById('i5');

    // Add event listener for hovering over the button
    button5.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image5.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button5.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image5.style.display = 'none';
    });

const button6 = document.getElementById('b6');
const image6 = document.getElementById('i6');

    // Add event listener for hovering over the button
    button6.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image6.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button6.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image6.style.display = 'none';
    });

const button7 = document.getElementById('b7');
const image7 = document.getElementById('i7');

    // Add event listener for hovering over the button
    button7.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image7.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button7.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image7.style.display = 'none';
    });

const button8 = document.getElementById('b8');
const image8 = document.getElementById('i8');

    // Add event listener for hovering over the button
    button8.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image8.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button8.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image8.style.display = 'none';
    });

const button9 = document.getElementById('b9');
const image9 = document.getElementById('i9');

    // Add event listener for hovering over the button
    button9.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image9.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button9.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image9.style.display = 'none';
    });

const button10 = document.getElementById('b10');
const image10 = document.getElementById('i10');

    // Add event listener for hovering over the button
    button10.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image10.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button10.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image10.style.display = 'none';
    });

const button11 = document.getElementById('b11');
const image11 = document.getElementById('i11');

    // Add event listener for hovering over the button
    button11.addEventListener('mouseenter', () => {
        // When hovering, display the image
        image11.style.display = 'block';
    });

    // Add event listener for when the mouse leaves the button
    button11.addEventListener('mouseleave', () => {
        // When mouse leaves, hide the image
        image11.style.display = 'none';
    });
    