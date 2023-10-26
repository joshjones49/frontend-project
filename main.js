const body = document.querySelector('#body');
const headerDiv = document.querySelector('.headerDiv');
const searchDiv = document.querySelector('.searchDiv');
const searchBar = document.querySelector('#searchBar');
const container = document.querySelector('.container');
const locDiv = document.querySelector('.locationDiv');

headerDiv.style.cursor = 'pointer';
headerDiv.addEventListener('click', function() {
    location.reload()
})

locDiv.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        grabLocationData()
    }
})

function grabLocationData() {
    charName = searchBar.value;
    $.get(`https://rickandmortyapi.com/api/location/?name=${charName}`, function(data) {
        //console.log(data.results);
        let character = data.results
        showCharacterData(character);
    })
}

searchBar.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
         grabCharacterData();
    }
});

// searchDiv.addEventListener('click', grabData);

function grabCharacterData(charName) {
     charName = searchBar.value;
    $.get(`https://rickandmortyapi.com/api/character/?name=${charName}`, function(data) {
        //console.log(data.results);
        let character = data.results
        showCharacterData(character);
    })
};

function showCharacterData(character) {
    headerDiv.textContent = 'HOME';
    headerDiv.style.fontSize = '200px'
    container.style.border = '0px'
    container.style.borderRadius = '0%'
    container.innerHTML = '';

    for(let i = 0; i < character.length; i++) {
        const char = character[i]

        const span = document.createElement('span');
           span.style.border = '15px solid yellow';
           span.style.width = 'auto';
           span.style.height = "auto";
           span.style.color = 'white'
           span.style.textShadow = '0px 0px 50px black'
           span.style.textAlign = 'center';
           span.style.backgroundColor = 'teal'
           span.style.borderRadius = '30px'
           container.appendChild(span)

            const h1 = document.createElement('h1');
            h1.textContent = char.name;
            h1.style.fontSize = '80px';
            span.appendChild(h1);

            const h2 = document.createElement('h2');
            h2.textContent = `Home of Origin: ${char.location.name}`;
            h2.style.fontSize = '50px';
            span.appendChild(h2)

            const h3 = document.createElement('h3');
            h3.textContent = `Number of Appearances: ${char.episode.length}`;
            h3.style.fontSize = '40px';
            span.appendChild(h3)

        const image = document.createElement('img');
            image.src = char.image;
           span.appendChild(image);   
    }
}

