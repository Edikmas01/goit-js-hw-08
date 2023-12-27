import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const createGallery = ({ preview, original, description }) => {
  return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
    `;
};

const galleryMarkup = galleryItems.map(createGallery).join('');
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

gallery.addEventListener('click', e => {
  e.preventDefault();
});

document.addEventListener('click', () => {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});

console.log(galleryItems);
