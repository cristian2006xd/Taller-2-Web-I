const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

if(cartBtn) cartBtn.addEventListener('click', () => cartSidebar.classList.remove('translate-x-full'));
if(closeCart) closeCart.addEventListener('click', () => cartSidebar.classList.add('translate-x-full'));

const actualizarSidebar = () => {
    const productos = JSON.parse(localStorage.getItem("carrito-productos")) || [];
    
    if(cartCount) cartCount.innerText = productos.length;

    cartItemsContainer.innerHTML = "";
    let total = 0;

    productos.forEach((item, index) => {
        total += parseFloat(item.precio);
        
        cartItemsContainer.innerHTML += `
            <div class="flex items-center gap-4 border-b border-gray-50 pb-4">
                <img src="${item.imagen}" class="w-16 h-12 object-cover rounded-lg">
                <div class="flex-grow">
                    <h4 class="text-sm font-bold uppercase italic">${item.nombre}</h4>
                    <p class="text-blue-600 font-black">$${parseFloat(item.precio).toLocaleString()}</p>
                </div>
                <button onclick="eliminarDelCarrito(${index})" class="text-gray-300 hover:text-red-500 transition">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    if(cartTotal) cartTotal.innerText = `$${total.toLocaleString()}`;
};

window.eliminarDelCarrito = (index) => {
    let productos = JSON.parse(localStorage.getItem("carrito-productos")) || [];
    productos.splice(index, 1);
    localStorage.setItem("carrito-productos", JSON.stringify(productos));
    actualizarSidebar();
};

window.vaciarCarrito = () => {
    localStorage.setItem("carrito-productos", JSON.stringify([]));
    actualizarSidebar();
};

window.checkout = () => {
    const productos = JSON.parse(localStorage.getItem("carrito-productos")) || [];
    if(productos.length === 0) return alert("Tu garaje está vacío.");
    
    alert("Procesando reserva NeoDrive...");
    vaciarCarrito();
    cartSidebar.classList.add('translate-x-full');
};

document.addEventListener('DOMContentLoaded', actualizarSidebar);