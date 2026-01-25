import '../css/style.css'; 
import 'flowbite'; 

document.addEventListener('DOMContentLoaded', () => {
    
    const stats = document.querySelectorAll('h4.font-bold.text-blue-600');
    
    const animateCount = (el) => {
        const target = parseInt(el.innerText); 
        let count = 0;
        const speed = 2000 / target; 

        const updateCount = () => {
            if (count < target) {
                count++;
                el.innerText = count + (el.innerText.includes('+') ? '+' : '');
                setTimeout(updateCount, speed);
            }
        };
        updateCount();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                statsObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    const pilares = document.querySelectorAll('.grid > .bg-white.p-10');
    
    pilares.forEach(pilar => {
        pilar.style.transition = 'all 0.4s ease';
        pilar.addEventListener('mouseenter', () => {
            pilar.classList.add('transform', '-translate-y-4', 'shadow-2xl', 'border-blue-200');
            pilar.querySelector('i').classList.add('fa-bounce');
        });
        pilar.addEventListener('mouseleave', () => {
            pilar.classList.remove('transform', '-translate-y-4', 'shadow-2xl', 'border-blue-200');
            pilar.querySelector('i').classList.remove('fa-bounce');
        });
    });
});