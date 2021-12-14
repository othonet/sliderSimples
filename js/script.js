let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img'),
    max =  images.length;

function nextImage(){

    images[currentImageIndex].classList.remove("selected", "fadeOut");
    
    currentImageIndex++;
    
    if(currentImageIndex >= max){
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("selected", "fadeOut");
}

function start(){
    setInterval(() => {
        nextImage();
    }, time);
}

window.addEventListener('load', start);