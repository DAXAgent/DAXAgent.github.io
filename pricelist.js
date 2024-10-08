/**
 * The JavaScript code imports Firebase SDK, initializes Firebase, retrieves products from Firestore,
 * and displays them on a webpage.
 */
// Импорт необходимых функций из Firebase SDK
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

// Firebase конфигурация и инициализация
const firebaseConfig = {
    apiKey: "AIzaSyB7soKP0TqNvmmVTgXuuYmzWFhF2cyKgiQ",
    authDomain: "daxagent-1719d.firebaseapp.com",
    projectId: "daxagent-1719d",
    storageBucket: "daxagent-1719d.appspot.com",
    messagingSenderId: "285688537232",
    appId: "1:285688537232:web:273a7857e4f048a773b815",
    measurementId: "G-QBY07FR8SC"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Firestore
const db = getFirestore(app);

// Функция для загрузки товаров из коллекции Firestore
async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        displayProduct(product);  // Отображение каждого товара
    });
}

// Функция для отображения продукта на странице
function displayProduct(product) {
    const productGrid = document.getElementById('product-list');
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button class="buy-button">Add to Cart</button>
    `;

    productGrid.appendChild(productItem);
}

// Загружаем продукты при загрузке страницы
window.onload = function() {
    loadProducts();
}
