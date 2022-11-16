import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divEl = document.querySelector('div.gallery');

const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`, '');

const insertListItems = (string => {
    divEl.insertAdjacentHTML('afterbegin', string);
});

insertListItems(renderList(galleryItems));

divEl.addEventListener('click', clickHendler);

function clickHendler (evt){
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG"){
        return;
    }

    const images = document.querySelectorAll('img');

    images.forEach((image) =>{
    
    const instance = basicLightbox.create(`<div class="modal">
        <img src="${evt.target.dataset.source}" alt="Big img"/>
    </div>`, {closable: true});
    instance.show();
    });
   
}
 


