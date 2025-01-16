let currentSlide = 0;  // Índice do slide atual

// Função para exibir o slide baseado no índice fornecido
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');  // Seleciona todos os slides
    const dots = document.querySelectorAll('.dot');  // Seleciona todos os indicadores

    // Verifica se o índice está fora do intervalo de slides
    if (index >= slides.length) {
        currentSlide = 0;  // Volta para o primeiro slide
    } else if (index < 0) {
        currentSlide = slides.length - 1;  // Vai para o último slide
    } else {
        currentSlide = index;  // Atualiza o slide atual
    }

    // Calcula o deslocamento para o slide atual
    const offset = -currentSlide * 100;
    const carouselInner = document.querySelector('.carousel-inner');  // Seleciona o container dos slides
    carouselInner.style.transform = `translateX(${offset}%)`;  // Aplica o deslocamento

    // Atualiza os indicadores para refletir o slide atual
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Função para exibir o próximo slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Função para exibir o slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializa o carrossel exibindo o slide atual ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

setInterval(nextSlide,2500)

