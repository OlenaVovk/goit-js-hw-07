import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('ul.gallery');

const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`, '');

const insertListItems = ((el,string) => {
    el.insertAdjacentHTML('afterbegin', string);
});

insertListItems(ulEl, renderList(galleryItems));

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';

document.body.appendChild(lightbox);

ulEl.addEventListener('click', clickHendler);

function clickHendler (evt){
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG"){
        return;
    }
    const images = document.querySelectorAll('img');

    images.forEach(() => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = evt.target.dataset.source;
        while(lightbox.firstChild){
             lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.append(img);
    })
}

lightbox.addEventListener('click', (evt) => {
    if (evt.target.nodeName !== "IMG"){
        return;
    }
    lightbox.classList.remove('active');
});