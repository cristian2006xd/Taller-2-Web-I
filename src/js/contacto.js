document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const submitBtn = contactForm.querySelector('button');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const formData = {
            nombre: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            asunto: contactForm.querySelector('select').value,
            mensaje: contactForm.querySelector('textarea').value
        };

        if (!formData.nombre || !formData.email || !formData.mensaje) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...`;
        submitBtn.classList.replace('bg-blue-600', 'bg-blue-800');

        setTimeout(() => {
            submitBtn.innerHTML = `<i class="fas fa-check-circle mr-2"></i> ¡Enviado con éxito!`;
            submitBtn.classList.replace('bg-blue-800', 'bg-green-600');
            
            contactForm.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.classList.replace('bg-green-600', 'bg-blue-600');
            }, 3000);

            console.log("Datos recibidos en NeoDrive:", formData);
        }, 2000);
    });
});