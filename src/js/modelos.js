const botonesExplorar = document.querySelectorAll('.btn-explorar');

botonesExplorar.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        const card = e.target.closest('.car-card');
        
        const infoAuto = {
            nombre: card.querySelector('h3').textContent,
            precio: card.querySelector('.text-2xl.font-black').textContent.replace('$', '').replace(',', ''),
            imagen: card.querySelector('img').src,
            id: Date.now() 
        };

        let carrito = JSON.parse(localStorage.getItem("carrito-productos")) || [];
        
        carrito.push(infoAuto);
        
        localStorage.setItem("carrito-productos", JSON.stringify(carrito));

        boton.innerText = "¡Agregado!";
        boton.classList.replace('bg-gray-900', 'bg-green-600');
        
        setTimeout(() => {
            boton.innerText = "Explorar";
            boton.classList.replace('bg-green-600', 'bg-gray-900');
        }, 1000);

        window.dispatchEvent(new Event('storage'));
        actualizarSidebar();
    });
});