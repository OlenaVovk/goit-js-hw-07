import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`, '');


const insertListItems = (string => {
    const divEl = document.querySelector('div.gallery');
    divEl.insertAdjacentHTML('afterbegin', string);
});

insertListItems(renderList(galleryItems));