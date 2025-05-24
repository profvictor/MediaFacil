document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação do botão CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Obrigado pelo seu interesse!');
        });
    }

    // Adicionar classe 'active' ao link de navegação atual
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    const form = document.getElementById('notas-form');
    const mediaValor = document.getElementById('media-valor');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const discursiva = parseFloat(document.getElementById('discursiva').value) || 0;
        const objetiva = parseFloat(document.getElementById('objetiva').value) || 0;
        const tarefa = parseFloat(document.getElementById('tarefa').value) || 0;
        const simulado = parseFloat(document.getElementById('simulado').value) || 0;

        // Fórmula de média (ajuste conforme necessário)
        // Exemplo: média simples
        const media = ((discursiva + objetiva + tarefa) / 3) + simulado;
        const mediaFormatada = media.toFixed(1);
        mediaValor.textContent = mediaFormatada;
    });
}); 