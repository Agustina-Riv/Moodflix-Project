const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function capitalizarAnimo(animo) {
    const mapa = {
        feliz: "😊 Feliz",
        triste: "😢 Triste",
        aburrido: "😐 Aburrido",
        romantico: "❤️ Romántico"
    };

    return mapa[animo] || animo;
}