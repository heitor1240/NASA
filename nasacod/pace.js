document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const after = document.querySelector('.after');
    const sliderWrapper = document.querySelector('.slider-wrapper');

    let isSliding = false;

    // Função para atualizar a posição do slider e o clip-path da imagem "depois"
    function slide(e) {
        if (!isSliding) return;

        let x = e.pageX - sliderWrapper.getBoundingClientRect().left;
        let width = sliderWrapper.offsetWidth;

        // Limitar o movimento do slider dentro dos limites da imagem
        let sliderPosition = Math.max(0, Math.min(x, width));

        // Atualizar a posição da linha (slider)
        slider.style.left = sliderPosition + 'px';

        // Ajustar a parte da imagem "depois" que é exibida
        after.style.clipPath = `inset(0 ${width - sliderPosition}px 0 0)`;
    }

    // Iniciar movimento ao clicar no slider
    slider.addEventListener('mousedown', function () {
        isSliding = true;
    });

    // Parar o movimento ao soltar o botão do mouse
    document.addEventListener('mouseup', function () {
        isSliding = false;
    });

    // Atualizar posição durante o movimento do mouse
    document.addEventListener('mousemove', slide);

    // Para toque em dispositivos móveis
    slider.addEventListener('touchstart', function () {
        isSliding = true;
    });

    document.addEventListener('touchend', function () {
        isSliding = false;
    });

    document.addEventListener('touchmove', function (e) {
        slide(e.touches[0]);
    });
});
