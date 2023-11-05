import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на ul.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

gallery.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const source = event.target.dataset.source;
  const sourceMain = galleryItems.find(
    ({ original }) => original === `${source}`
  );
  console.log(sourceMain.original);

  const instance = basicLightbox.create(`
        <img src=${sourceMain.original} width="800" height="600">
    `);

  instance.show();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
           <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
           </a>
        </li>`
    )
    .join("");
}
