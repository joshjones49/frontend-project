//=====Creating Elements====================
const body = document.querySelector('#body');
const headerDiv = document.querySelector('.headerDiv');
const searchDiv = document.querySelector('.searchDiv');
const searchBar = document.querySelector('#searchBar');
const container = document.querySelector('.container');
const locBar = document.querySelector('#searchBarLoc');
const pplBtn = document.querySelector('.pplBtn');
const locBtn = document.querySelector('.locBtn')

//=====Event Listeners=====================
headerDiv.addEventListener('click', () => {
    location.reload()
})

locBar.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        grabLocationData()
    }
})

searchBar.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
         grabCharacterData();
    }
});

pplBtn.addEventListener('click', grabPeopleList)

locBtn.addEventListener('click', grabLocList)

//=====GET Requests===================
function grabLocationData(locName) {
    locName = locBar.value;
    $.get(`https://rickandmortyapi.com/api/location/?name=${locName}`, (data) => {
        // console.log(data.results);
        let location = data.results
        showLocationData(location);
    })
}

function grabCharacterData(charName) {
    charName = searchBar.value;
   $.get(`https://rickandmortyapi.com/api/character/?name=${charName}`, (data) => {
       //console.log(data.results);
       let character = data.results
       showCharacterData(character);
   })
};

function grabPeopleList(charIdNumbers) {
     charIdNumbers =  randomNumbers()
    $.get(`https://rickandmortyapi.com/api/character/${charIdNumbers}`, (data) => {
         let charNumber = data
        showCharacterData(charNumber);
         //console.log(data);
    })
}

function grabLocList(locIdNumbers) {
     locIdNumbers = randomLocNumbers()
    $.get(`https://rickandmortyapi.com/api/location/${locIdNumbers}`, (data) => {
        let locNumbers = data
        showLocationData(locNumbers)
        console.log(locNumbers);
    })
}

//=====Functions========================
function showLocationData(location) {
    headerDiv.textContent = 'HOME';
    headerDiv.style.fontSize = '200px';
    container.style.border = '0px';
    container.style.borderRadius = '0%';
    container.innerHTML = '';

    for(let i = 0; i < location.length; i++) {
        const loc = location[i]

        const span = document.createElement('span');
           span.style.border = '15px solid yellow';
           span.style.width = 'auto';
           span.style.height = "auto";
           span.style.color = 'white';
           span.style.textShadow = '0px 0px 50px black';
           span.style.textAlign = 'center';
           span.style.backgroundColor = 'teal';
           span.style.borderRadius = '30px';
           span.style.cursor = 'pointer';
           container.appendChild(span);

            const h1 = document.createElement('h1');
            h1.textContent = loc.name;
            h1.style.fontSize = '80px';
            span.appendChild(h1);

            const h2 = document.createElement('h2');
            h2.textContent = `Dimension: ${loc.dimension}`;
            h2.style.fontSize = '50px';
            span.appendChild(h2)

            const h3 = document.createElement('h3');
            h3.textContent = `Number of Residents: ${loc.residents.length}`;
            h3.style.fontSize = '40px';
            span.appendChild(h3)
    }
}

function showCharacterData(character) {
    headerDiv.textContent = 'HOME';
    headerDiv.style.fontSize = '200px'
    container.style.border = '0px'
    container.style.borderRadius = '0%'
    container.innerHTML = '';

    for(let i = 0; i < character.length; i++) {
        const char = character[i]

        const span = document.createElement('span');
           span.style.border = '15px solid yellowgreen';
           span.style.width = 'auto';
           span.style.height = "auto";
           span.style.color = 'white'
           span.style.textShadow = '0px 0px 50px black'
           span.style.textAlign = 'center';
           span.style.backgroundColor = 'darkslateblue'
           span.style.borderRadius = '30px'
           container.appendChild(span)

            const h1 = document.createElement('h1');
            h1.textContent = char.name;
            h1.style.fontSize = '80px';
            span.appendChild(h1);

            const h2 = document.createElement('h2');
            h2.textContent = `Origin: ${char.location.name}`;
            h2.style.fontSize = '50px';
            span.appendChild(h2)

            const h3 = document.createElement('h3');
            h3.textContent = `Appearances: ${char.episode.length}`;
            h3.style.fontSize = '40px';
            span.appendChild(h3)

        const image = document.createElement('img');
            image.src = char.image;
           span.appendChild(image);   
    }
}

function randomNumbers() {
    let randomNumbers = [];

    for(let i = 0; i <= 50; i++) {
        let currentNumber = Math.floor(Math.random()* 827)
        randomNumbers.push(currentNumber)
    }
    return randomNumbers;
}

function randomLocNumbers() {
    let randomNumbers = [];

    for(let i = 0; i <= 50; i++) {
        let currentNumber = Math.floor(Math.random()* 127)
        randomNumbers.push(currentNumber)
    }
    return randomNumbers;
}

