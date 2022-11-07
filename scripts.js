const mainNav = document.getElementById('main-nav')
const nextButton = document.getElementById('btn-next')
const prevButton = document.getElementById('btn-prev')
const images = [...document.querySelectorAll('.product-image')]
const quantityInput = document.getElementById('quantity')
const cartContainer = document.getElementById('cart-container')
const cartItemsList = document.getElementById('cart-items-list')
const quantityTag = document.getElementById('quantity-tag')
const checkoutBtn=document.getElementById('btn-checkout')
const emptyCartMessage=document.getElementById('empty-cart-message')
const productPrice = 250;
const discountPercentage = 50;
let currentImageIndex = 0
let quantity = 0
let cartQuantity = 0
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
function addToCart() {
    cartQuantity = quantity
    quantity = 0
    render()
}
function showPrevImage() {
    //hide current image
    images[currentImageIndex].classList.remove('current')
    images[currentImageIndex - 1].classList.remove('viewed')
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
function changeQuantity(amount) {
    quantity += amount
    quantity = quantity > 0 ? quantity : 0
    render()
}
updateButtonsState()
function removeItem(e) {
    cartQuantity = 0
    e.stopPropagation()
    render()
    console.log(e)
}
function render() {
    quantityInput.value = quantity
    let discountedProductPrice=(productPrice * discountPercentage / 100)
    let totalPrice = cartQuantity * discountedProductPrice
    let cartItemsHtml = ''
    if (cartQuantity > 0) {
        cartItemsHtml += `<li class="cart-item">
        <img src="images/image-product-1-thumbnail.jpg" alt="sneakers thumbnail" class="cart-item-thumbnail">
        <div class="cart-item-name-group">
          <span class="cart-item-name">Autumn Limited Edition...</span>
          <div class="cart-item-pricing-group">
            <span class="cart-item-price">
            ${discountedProductPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}</span>
            <span class="cart-item-quantity">x ${cartQuantity}</span>
            <span class="cart-item-total">
            ${totalPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}</span>
          </div>
        </div>
        <button onclick="removeItem(event)" class="cart-remove-item"><img src="images/icon-delete.svg"></button>
      </li>`
    }
    cartItemsList.innerHTML = cartItemsHtml
    if (cartQuantity > 0) {
        quantityTag.textContent = cartQuantity
        quantityTag.style.display = 'inline'
        checkoutBtn.style.display='inline-block'
        emptyCartMessage.style.display='none'
    }
    else {
        quantityTag.style.display = 'none'
        checkoutBtn.style.display='none'
        emptyCartMessage.style.display='block'
    }

}
function showCart() {
    cartContainer.classList.add('visible')
}
function hideCart() {
    cartContainer.classList.remove('visible')
}
render()