import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGallery() {
    galleryItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.alt = item.description;
        image.setAttribute('data-source', item.original);

        link.appendChild(image);
        listItem.appendChild(link);
        galleryContainer.appendChild(listItem);
    });
}

createGallery();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

galleryContainer.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        lightbox.open({
            items: galleryItems.map((item) => ({
                src: item.original,
                alt: item.description,
            })),
    
        });
    }
});

console.log(galleryItems);