document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#genpokemon').addEventListener('click', renderEverything);
    document.querySelector('#deletebutt').addEventListener('click', deleteEverything);
});

function renderEverything() {
    let container = document.querySelector('#pokecont');
    container.innerHTML = "";
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
        .then(res => res.json())
        .then(data => data.results.forEach(pokemon => 
            fetch(pokemon.url)
                .then(res => res.json())
                .then(renderPokemon)
        ));
    document.querySelector('#deletebutt').style.display = 'block';
}

function renderPokemon(data) {
    let container = document.getElementById('pokecont');
    let card = document.createElement('div');
    card.classList.add('ui', 'card');
    
    let img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
    img.onerror = () => img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    
    let name = document.createElement('h4');
    name.innerText = data.name;
    
    let number = document.createElement('p');
    number.innerText = `#${data.id}`;
    
    let types = document.createElement('ul');
    data.types.forEach(type => {
        let li = document.createElement('li');
        li.innerText = type.type.name;
        types.appendChild(li);
    });

    card.append(img, name, number, types);
    container.appendChild(card);
}

function deleteEverything() {
    let container = document.querySelector('#pokecont');
    container.innerHTML = "";
    let button = document.createElement('button');
    button.innerText = "Generate Pokemon";
    button.id = 'genpokemon';
    button.classList.add('ui', 'secondary', 'button');
    button.addEventListener('click', renderEverything);
    container.appendChild(button);
    document.querySelector('#deletebutt').style.display = 'none';
}