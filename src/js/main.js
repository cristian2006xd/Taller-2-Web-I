import '../css/style.css'; 
import 'flowbite'; 

document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
            header.classList.remove('bg-white/80');
        } else {
            header.classList.remove('bg-white', 'shadow-md');
            header.classList.add('bg-white/80');
        }
    });

    const newsletterForm = document.querySelector('form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const userEmail = emailInput.value;

            if (userEmail) {
                const btn = newsletterForm.querySelector('button');
                const originalText = btn.innerHTML;
                
                btn.innerHTML = '<i class="fas fa-check"></i> ¡Listo!';
                btn.classList.replace('bg-gray-900', 'bg-green-600');
                
                alert(`¡Gracias por unirte a NeoDrive, ${userEmail}! Te enviaremos nuestras ofertas pronto.`);
                
                emailInput.value = ''; 

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-green-600', 'bg-gray-900');
                }, 3000);
            }
        });
    }

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.grid > div, h2');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});