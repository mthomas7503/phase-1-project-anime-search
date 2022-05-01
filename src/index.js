
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
        const li = document.createElement('li');
        const ul = document.createElement('ul')
        const info = document.querySelector('#info')
        const p = document.createElement('p')
        info.appendChild(ul)
        ul.appendChild(li)
        li.innerHTML = `<a href="${y.url}" target="_blank">
        <img src="${y.images.jpg.image_url}" ></a>`
        
})}

const request = document.querySelector('form')


document.addEventListener('DOMContentLoaded', function() {createSubmit(); clear()})

