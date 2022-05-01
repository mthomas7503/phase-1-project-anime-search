
function getAnime (name) {
    fetch(`https://api.jikan.moe/v4/anime?q=${name}`).then(resp => resp.json()).then(x => createLi(x)).catch(err => console.log(err.message))
}

function clear() {
const form = document.createElement('form');
document.querySelector('#clear').appendChild(form);
const empty = document.createElement('input')
form.appendChild(empty);
empty.setAttribute("type", "submit")
empty.setAttribute("id", "clear")
empty.setAttribute("value", "Clear")
empty.addEventListener('submit', () => {const ul = document.querySelectorAll('ul')
ul.forEach(x => x.remove())})
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

function createLi(x) {
    x.data.forEach(y => {
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const info = document.querySelector('#info')
        const p = document.createElement('p')
        info.appendChild(ul)
        ul.appendChild(li)
        li.innerHTML = `<a href="${y.trailer.url}" target="_blank">
        <img src="${y.images.jpg.image_url}" ></a>`
        li.appendChild(p)
        p.innerHTML =  `<ul><li>${y.status}</li><li>${y.episodes}</li><li>${y.synopsis}</li>
        <li>`

        
})}

const request = document.querySelector('form')


document.addEventListener('DOMContentLoaded', function() {createSubmit(); clear()})

