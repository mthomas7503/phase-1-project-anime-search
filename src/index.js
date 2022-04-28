function getAnime (name) {
    fetch(`https://api.jikan.moe/v4/anime/?q=${name}`).then(resp => resp.json()).then(x => console.log(x).catch(err => console.log(err)))
}

function createSubmit() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const sub = document.createElement('input');
    document.querySelector('div').appendChild(form);
    form.appendChild(input);
    form.appendChild(sub);
    sub.setAttribute("type", "submit");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Anime");
    form.reset();
    form.addEventListener('submit', x => {x.preventDefault();
        getAnime(input.value);
        form.reset()})
}


const request = document.querySelector('form')


document.addEventListener('DOMContentLoaded', createSubmit())

