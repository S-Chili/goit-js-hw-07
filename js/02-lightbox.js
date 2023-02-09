import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const itemsMarkup = createPicturesMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("afterbegin", itemsMarkup);

function createPicturesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt='${description}'/>
    </a>
  `;
    })
    .join("");
}

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scaleImageToRatio: true,
});
