function mostrarSaludo() {
    const contenedorSaludo = document.getElementById("saludo-dinamico");
    
    if (contenedorSaludo) {
        contenedorSaludo.style.whiteSpace = "pre-wrap"; 
        
        const hora = new Date().getHours();
        let textoSaludo = "";

        if (hora >= 6 && hora < 12) {
            textoSaludo = "¡Buenos días! ☀️";
        } else if (hora >= 12 && hora < 20) {
            textoSaludo = "¡Buenas tardes!";
        } else {
            textoSaludo = "¡Buenas noches!";
        }

        let i = 0;
        contenedorSaludo.textContent = ""; 

        function escribirLetra() {
            if (i < textoSaludo.length) {
                contenedorSaludo.textContent += textoSaludo.charAt(i);
                i++;
                setTimeout(escribirLetra, 70); 
            }
        }

        escribirLetra();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSaludo();

    const gridPeliculas = document.getElementById('peliculasGrid');
    const btnAtras = document.getElementById('prevBtn');
    const btnAdelante = document.getElementById('nextBtn');

    if (gridPeliculas && btnAdelante) {
        btnAdelante.addEventListener('click', () => {
            gridPeliculas.scrollLeft += 240;
        });
    }

    if (gridPeliculas && btnAtras) {
        btnAtras.addEventListener('click', () => {
            gridPeliculas.scrollLeft -= 240;
        });
    }
});