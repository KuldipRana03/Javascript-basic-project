// Cart
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let total = 0;
let itemCount = 0;

// Add to Cart
function addToCart(productCard) {
  const name = productCard.querySelector(".product-name").textContent;
  const priceText = productCard.querySelector(".product-price").textContent;
  const price = parseFloat(priceText.replace("$", ""));
  const imageSrc = productCard.querySelector(".product-image").src;

  const existingItem = cartItems.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      name,
      price,
      image: imageSrc,
      quantity: 1,
    });
  }
  updateLocalStorage();
  updateCartDisplay();
}

// Remove Item from Cart
function removeItem(name) {
  cartItems = cartItems.filter((item) => item.name !== name);
  updateLocalStorage();
  updateCartDisplay();
}

// Quantity Change
function changeQuantity(name, change) {
  const item = cartItems.find((item) => item.name === name);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItem(name);
    } else {
      updateLocalStorage();
      updateCartDisplay();
    }
  }
}

// animate cart icon

// Show cart items in cart
function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-price");
  const countElement = document.getElementById("cart-count");
  cartList.innerHTML = "";
  total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item"; /// different from the original code
    li.innerHTML = ` 
    <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
    <div class="cart-item-details">
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-price">${item.price} x ${item.quantity}</div>
    </div>
    <div class="quantity-controls">
      <button onclick="changeQuantity('${item.name}',-1)">-</button>
      <button onclick="changeQuantity('${item.name}',1)">+</button>
    </div>
    <button class="remove-item" onclick="removeItem('${item.name}')">X</button>`;
    cartList.appendChild(li);
  });
  totalElement.textContent = total.toFixed(2);
  countElement.textContent = itemCount;
}

// Store cart in Local Storage
function updateLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Load Card on page refresh
window.onload = function () {
  updateCartDisplay();
};

// Cart open close
const cartIcon = document.querySelector(".cart-icon");
const cartModel = document.querySelector(".cart-model");
const cartClose = document.querySelector(".close-btn");
cartIcon.addEventListener("click", () => {
  cartModel.classList.add("open-cart");
});
cartClose.addEventListener("click", () => {
  cartModel.classList.remove("open-cart");
});

// Checkout button
const checkoutBtn = document.querySelector(".checkout-btn");
checkoutBtn.addEventListener("click", () => {
  if (cartItems.length > 0) {
    cartItems = [];
    alert("Checkout successful!");
    updateLocalStorage();
    updateCartDisplay();
  } else {
    alert("Your cart is empty!");
  }
});
