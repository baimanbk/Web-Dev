
var images = ["photo1.png", "photo2.png", "photo3.png", "photo4.png"];
var currentIndex = 0;
var photo = document.getElementById("photo");


function changePhoto() {
    
    photo.src = images[currentIndex];
    
    
    currentIndex = (currentIndex + 1) % images.length;
}


setInterval(changePhoto, 2000);
