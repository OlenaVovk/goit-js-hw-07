import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const renderList = (images) => 
    images.reduce((acc, {preview, original, description}) => 
    acc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, '');

const ulEl = document.querySelector('ul.gallery');

const insertListItems = (string => {
    ulEl.insertAdjacentHTML('afterbegin', string);
});

insertListItems(renderList(galleryItems));

ulEl.addEventListener('click', clickHendler);

function clickHendler (evt){
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG"){
        return;
    }

   let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'text',
    captionsData: 'fghfghjklhjl;mjjk',
    captionDelay: 250,
   });
    gallery.on('show.simplelightbox');

}