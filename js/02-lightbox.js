import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`, '');

const ulEl = document.querySelector('ul.gallery');

const insertListItems = (string => {
    ulEl.insertAdjacentHTML('afterbegin', string);
});

insertListItems(renderList(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    widthRatio: 0.95,
    heightRatio: 0.95,
});
   
   
   


