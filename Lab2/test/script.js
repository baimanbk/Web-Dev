// Array of image URLs
var images = ["photo1.png", "photo2.png"];
var currentIndex = 0;
var photo = document.getElementById("photo");

// Function to change photo
function changePhoto() {
    // Set the src attribute of the photo to the current image in the array
    photo.src = images[currentIndex];
    
    // Increment the index for the next image, reset to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;
}

// Call the changePhoto function every 2 seconds
setInterval(changePhoto, 2000);
