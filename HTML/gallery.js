document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-content');
    const caption = document.getElementById('caption');
    const close = document.getElementById('close');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = thumbnail.src;
            caption.textContent = thumbnail.alt;
        });
    });

    close.addEventListener('click', () => { 
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; 
        }
    });
});
