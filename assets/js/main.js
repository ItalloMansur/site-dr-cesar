// Alterna a imagem principal ao clicar na miniatura
function setMainPhoto(src, element) {
  const mainPhoto = document.getElementById('doctor-main-photo');
  if (mainPhoto) {
    mainPhoto.src = src;
  }

  const thumbnails = document.querySelectorAll('.thumbnail-img');
  thumbnails.forEach(img => img.classList.remove('active'));
  
  if (element) {
    element.classList.add('active');
  }
}

// Trata extensões de imagem automaticamente em caso de divergência no sistema operacional
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.onerror = function() {
      if (this.src.endsWith('.jpg')) {
        this.src = this.src.replace('.jpg', '.jpeg');
      } else if (this.src.endsWith('.jpeg')) {
        this.src = this.src.replace('.jpeg', '.png');
      }
    };
  });
});
