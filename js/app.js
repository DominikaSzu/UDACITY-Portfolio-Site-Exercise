document.addEventListener("DOMContentLoaded", function() {
    const photos = document.getElementsByClassName("project-photo");
    
    for (i = 0; i < photos.length; i++) {
        let photo = photos[i];
        photo.addEventListener("mouseover", function() {
            photo.style.opacity = "1";
        })
    }
    
    for (i = 0; i < photos.length; i++) {
        let photo = photos[i];
        photo.addEventListener("mouseout", function() {
            photo.style.opacity = "0.7";
        })
    }
    
})