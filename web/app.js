const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightBox = document.querySelector(".lightbox-container .main-thumbnail");
const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile-thumb");
const thumbMob = document.querySelector(".thumb-mob");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-popup");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const addBtn = document.querySelector(".add_btn");
const indicator = document.querySelector(".indicator");
const cartContent = document.querySelector(".cart-content");
let amountValue = 0;
let currentImg = 1;


function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
}

menuBtn.addEventListener("click", openMenu);


function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

closeBtn.addEventListener("click", closeMenu);


function handlePlus() {
  amountValue++;
  amount.innerText = amountValue;
}

plusBtn.addEventListener("click", handlePlus);


function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}

minusBtn.addEventListener("click", handleMinus);


function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/uploads/sneakers/image-product-${currentImg}.jpg`;
}

nextBtn.addEventListener("click", nextImage);


function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./images/uploads/sneakers/image-product-${currentImg}.jpg`;
}

prevBtn.addEventListener("click", prevImage);


function toggleCart() {
  cart.classList.toggle("invisible");
}

cartBtn.addEventListener("click", toggleCart);


function closeLightBox() {
  lightbox.classList.add("invisible");
}

closeLightboxBtn.addEventListener("click", closeLightBox);


function openLightBox() {
  lightbox.classList.remove("invisible");
}

mainThumbnail.addEventListener("click", openLightBox);


function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
    cartContent.classList.remove("empty");
    cartContent.innerHTML =
      `<div class="product">
        <div>
          <img src="./images/uploads/sneakers/image-product-1-thumbnail.jpg" class="product-img" alt="product">
          <div class="product-info">
            <p class="product-title">Fall Limited Edition Sneakers</p>
            <p><span>$125.00</span> × <span class="number">${amountValue}</span> <span class="total">$${total}</span></p>
          </div>
          <button class="delete-btn" onclick="deleteItem()"><img src="./images/uploads/sneakers/icon-delete.svg" alt="delete"></button>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>`;
    indicator.style.display = "block";
    indicator.innerText = amountValue;
  }
}

addBtn.addEventListener("click", addItem);


function deleteItem() {
    cartContent.classList.add("empty");
    cartContent.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelectorAll(".selected");
    if (lastImg) {
      lastImg[0].classList.remove("selected");
    }
    image.classList.add("selected");
    const selectedImg = document.querySelector(".selected");
    switch (selectedImg.getAttribute("src")) {
      case "./images/uploads/sneakers/image-product-1-thumbnail.jpg":
        mainThumbnail.src = "./images/uploads/sneakers/image-product-1.jpg";
        mainThumbnailLightBox.src = "./images/uploads/sneakers/image-product-1.jpg";
        break;
      case "./images/uploads/sneakers/image-product-2-thumbnail.jpg":
        mainThumbnail.src = "./images/uploads/sneakers/image-product-2.jpg";
        mainThumbnailLightBox.src = "./images/uploads/sneakers/image-product-2.jpg";
        break;
      case "./images/uploads/sneakers/image-product-3-thumbnail.jpg":
        mainThumbnail.src = "./images/uploads/sneakers/image-product-3.jpg";
        mainThumbnailLightBox.src = "./images/uploads/sneakers/image-product-3.jpg";
        break;
      case "./images/uploads/sneakers/image-product-4-thumbnail.jpg":
        mainThumbnail.src = "./images/uploads/sneakers/image-product-4.jpg";
        mainThumbnailLightBox.src = "./images/uploads/sneakers/image-product-4.jpg";
        break;
    }
  });
});
