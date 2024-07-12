document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images img');
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.right = '20px';
    document.body.appendChild(message);
    let loadedImages = 0;

    const loadImage = (img) => {
        img.src = img.dataset.src;
        loadedImages++;
        message.textContent = `${loadedImages} images loaded from 20`;
        message.style.padding = '10px';
        message.style.backgroundColor = 'red';
        message.style.borderRadius = '20px';
        if (loadedImages === images.length) {
            message.style.backgroundColor = 'green';
            setTimeout(() => {
                message.remove();
            }, 3000);
        }
    };

    const checkScroll = () => {
        images.forEach(img => {
            if (img.src.includes('temp.jpg') && img.getBoundingClientRect().top <= window.innerHeight) {
                loadImage(img);
            }
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});