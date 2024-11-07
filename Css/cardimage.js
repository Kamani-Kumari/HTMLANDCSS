let currentImageIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].style.opacity = 0; // Hide current image
    currentImageIndex = (currentImageIndex + 1) % totalImages; // Move to next image
    images[currentImageIndex].style.opacity = 1; // Show next image
}

// Set interval to change image every 3 seconds
setInterval(showNextImage, 3000);

// Initialize the first image as visible
images[currentImageIndex].style.opacity = 1;
