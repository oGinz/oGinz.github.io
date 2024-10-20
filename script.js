window.addEventListener('scroll', function() {
    const scrollY = window.scrollY; // Posição da rolagem
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Máxima rolagem
    const scrollFraction = scrollY / maxScroll; // Fração da rolagem

    // Cores para o fade
    const startColor = { r: 0, g: 0, b: 0 }; // Cor inicial (Preto)
    const endColor = { r: 2, g: 14, b: 3 }; // Cor final (Azul escuro)

    // Interpolação de cores
    const r = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollFraction);
    const g = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollFraction);
    const b = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollFraction);

    // Aplicando a nova cor de fundo
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
