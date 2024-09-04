// Loader
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.classList.add('hidden');
});

// Scroll suave
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Galería
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <button class="close-modal">&times;</button>
    `;
    document.body.appendChild(modal);
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      modal.remove();
    });
  });
});