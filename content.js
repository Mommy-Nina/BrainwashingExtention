// Array of MEGA-hosted image URLs
const imageLibrary = [
  "https://github.com/Mommy-Nina/BrainwashingExtention/blob/main/get%20weaker%20for%20Mommy%20Nina.jpg",
  "https://github.com/Mommy-Nina/BrainwashingExtention/blob/main/get%20weaker%20for%20Mommy%20Nina.jpg",
  "https://github.com/Mommy-Nina/BrainwashingExtention/blob/main/get%20weaker%20for%20Mommy%20Nina.jpg oompa loompa"
];



// Function to get a random image
function getRandomImage() {
  const index = Math.floor(Math.random() * imageLibrary.length);
  return imageLibrary[index];
}

// Replace images with those from the library
function replaceImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        if (! img.src.includes("indra")) {
          const randomImage = imageLibrary[Math.floor(Math.random() * imageLibrary.length)];
          img.src = randomImage;
          img.srcset = "";
        }
      });
}

window.addEventListener("load", replaceImages);
