// Выбираем все картинки в галерее
const images = document.querySelectorAll('.gallery img');

// Создаем контейнер для увеличенной картинки
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightbox.innerHTML = ''; // очищаем предыдущие
        lightbox.appendChild(lightboxImg);
    });
});

// Закрытие lightbox при клике на фон
lightbox.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});
