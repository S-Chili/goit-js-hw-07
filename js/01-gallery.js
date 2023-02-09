import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const itemsMarkup = createPicturesMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML("afterbegin", itemsMarkup);

function createPicturesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
  `;
    })
    .join("");
}

galleryContainerEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") return;

  const targetLink = evt.target.dataset.source;

  const selectedPicture = basicLightbox.create(
    `
		<img src="${targetLink}"/>
        `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", EscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", EscKeyPress);
      },
    }
  );
  selectedPicture.show();

  function EscKeyPress(evt) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (isEscKey) {
      selectedPicture.close();
    }
  }
});
