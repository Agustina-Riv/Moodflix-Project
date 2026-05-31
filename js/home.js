function mostrarSaludo() {
    const contenedorSaludo = document.getElementById("saludo-dinamico");
    
    if (contenedorSaludo) {
        contenedorSaludo.style.whiteSpace = "pre-wrap"; 
        
        const hora = new Date().getHours();
        let textoSaludo = "";

        if (hora >= 6 && hora < 12) {
            textoSaludo = "¡Buenos días! ☀️";
        } else if (hora >= 12 && hora < 20) {
            textoSaludo = "¡Buenas tardes! 🌤️";
        } else {
            textoSaludo = "¡Buenas noches! 🌙";
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

    if (gridPeliculas && typeof catalogo !== 'undefined') {
        catalogo.forEach(item => {
            const animoBadge = item.animo[0]; 

            const cardHTML = `
                <div class="pelicula-card">
                    <div class="imagen-contenedor">
                        <span class="badge ${animoBadge}">${animoBadge}</span>
                        <img src="${item.imagen}" alt="Portada de ${item.titulo}">
                    </div>
                    <div class="pelicula-info">
                        <div class="texto-bloque">
                            <h3>${item.titulo}</h3>
                            <p>${item.tipo === 'serie' ? 'Serie' : 'Película'} • ${item.duracion} min</p>
                        </div>
                        <a href="/pages/recomendador.html?animo=${animoBadge}" class="btn-ver-mas">Ver más</a>
                    </div>
                </div>
            `;

            gridPeliculas.innerHTML += cardHTML;
        });
    }
});