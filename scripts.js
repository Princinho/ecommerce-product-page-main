const mainNav = document.getElementById('main-nav')
const nextButton = document.getElementById('btn-next')
const prevButton = document.getElementById('btn-prev')
const images = [...document.querySelectorAll('.product-image')]
let currentImageIndex = 0
function toggleNav() {
    mainNav.classList.toggle('visible')
}

function showNextImage() {
    //hide current image
    images[currentImageIndex].classList.remove('current')
    images[currentImageIndex].classList.add('viewed')
    //display next image
    images[currentImageIndex + 1].classList.toggle('current')

    currentImageIndex += 1
    updateButtonsState()
    console.log(currentImageIndex, images.length)
}
function showPrevImage() {
    //hide current image
    images[currentImageIndex].classList.remove('current')
    images[currentImageIndex-1].classList.remove('viewed')
    // images[currentImageIndex].classList.toggle('viewed')
    //display next image
    images[currentImageIndex - 1].classList.add('current')
    

    currentImageIndex -= 1
    updateButtonsState()
    console.log(currentImageIndex, images.length)
}
function updateButtonsState() {
    prevButton.disabled = currentImageIndex === 0;
    nextButton.disabled = currentImageIndex === images.length - 1;
}
updateButtonsState()