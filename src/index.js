
function getAnime (name) {
        fetch(`https://api.jikan.moe/v4/anime?q=${name}`).then(resp => resp.json()).then(x => {createLi(x); flagIssue(x)}).catch((err) =>alert(`${err.message}`))}


function flagIssue(x) {if(x.pagination.items.count === 0) {alert("Anime not found!")}}

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
        if (document.querySelector('ul')) {ul = document.querySelectorAll('ul');  
        ul.forEach(x => x.remove()); 
        getAnime(input.value)
    form.reset()} 
        else {getAnime(input.value);
        form.reset()}})
}

function filterAdult(y) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const info = document.querySelector('#info')
    const p = document.createElement('p')
    info.appendChild(ul)
    ul.appendChild(li)
    li.innerHTML = `<a href="${y.trailer.url}">
    <img src="https://cdn.xxl.thumbs.canstockphoto.com/no-entry-under-18-sign-stock-illustration_csp2636378.jpg" ></a>`
    li.appendChild(p)
    p.innerHTML =  `<ul>
    <li>${y.title}</li>
    <li>${y.rating}</li>
    <li>${y.status}</li><li>${y.episodes}</li><li>${y.synopsis}</li>`
}

function createInfo(y) {const ul = document.createElement('ul')
const li = document.createElement('li')
const info = document.querySelector('#info')
const p = document.createElement('p')
info.appendChild(ul)
ul.appendChild(li)
li.innerHTML = `<a href="${y.trailer.url}" target="_blank">
<img src="${y.images.jpg.image_url}" ></a>`
li.appendChild(p)
p.innerHTML =  `<ul>
<li>${y.title}</li>
<li>${y.rating}</li>
<li>${y.status}</li><li>${y.episodes}</li><li>${y.synopsis}</li>`}

function createLi(x) {
    x.data.forEach(y => {
        if (y.rating === "Rx - Hentai") { filterAdult(y)
}
else{createInfo(y)
}})}


document.addEventListener('DOMContentLoaded', function() {createSubmit(); clear()})

