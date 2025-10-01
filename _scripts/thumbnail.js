// Lightbox functionality for thumbnail images
(function() {
  'use strict';

  // Create lightbox overlay if it doesn't exist
  function createLightbox() {
    if (document.getElementById('lightbox-overlay')) return;
    
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox-overlay';
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-content" id="lightbox-img" alt="Enlarged image">
      <div id="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);
  }

  // Initialize lightbox
  function initLightbox() {
    createLightbox();
    
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Add click handlers to all thumbnail links
    const thumbnails = document.querySelectorAll('.thumbnail-link');
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.href;
        const caption = this.getAttribute('aria-label');
        
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });

    // Close lightbox when clicking X
    closeBtn.addEventListener('click', function() {
      closeLightbox();
    });

    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target === closeBtn) {
        closeLightbox();
      }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();
