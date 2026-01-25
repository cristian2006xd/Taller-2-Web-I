document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('neodrive_cart')) || [];
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBtn = document.getElementById('cart-btn');
    const closeBtn = document.getElementById('close-cart');
    const itemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    const countElement = document.getElementById('cart-count');

    cartBtn.onclick = () => cartSidebar.classList.remove('translate-x-full');
    closeBtn.onclick = () => cartSidebar.classList.add('translate-x-full');

    const renderCart = () => {
        itemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            itemsContainer.innerHTML += `
                <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <img src="${item.img}" class="w-20 h-12 object-cover rounded-lg">
                    <div class="flex-grow">
                        <h4 class="font-bold text-[10px] uppercase text-gray-800">${item.name}</h4>
                        <p class="text-blue-600 font-bold text-xs">$${item.price.toLocaleString()}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 p-2">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
        });

        totalElement.innerText = `$${total.toLocaleString()}`;
        countElement.innerText = cart.length;
        localStorage.setItem('neodrive_cart', JSON.stringify(cart));
    };

    window.addToCart = (name, price, img) => {
        cart.push({ name, price, img });
        renderCart();
        cartSidebar.classList.remove('translate-x-full');
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        renderCart();
    };

    window.checkout = () => {
        if(cart.length === 0) return alert("Tu garaje está vacío");
        alert("¡Pedido procesado! Un asesor de NeoDrive se contactará contigo.");
        cart = [];
        renderCart();
    };

    renderCart(); 
});