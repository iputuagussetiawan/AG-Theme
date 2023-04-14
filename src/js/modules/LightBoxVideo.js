import GLightbox from 'glightbox';
class LightBoxVideo {
  // 1. describe and create/initiate our object
  constructor() {
    this.lightboxVideo = GLightbox({
      selector: '.glightboxVideo'
    });
  }
}

export default LightBoxVideo