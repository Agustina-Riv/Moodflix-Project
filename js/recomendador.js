const selectAnimo = document.getElementById("select-animo");
const selectTiempo = document.getElementById("select-tiempo");
const selectTipo = document.getElementById("select-tipo");
const btnFiltrar = document.getElementById("btn-filtrar");
const btnLimpiar = document.getElementById("btn-limpiar");
const contenedor = document.getElementById("contenedor-cards");
const mensaje = document.getElementById("mensaje-resultado");

const rangosTiempo = {
    "30-60": { min:0, max: 60 },
    "60-120": { min: 61, max: 120 },
    "120+": { min: 121, max: 9999 }
}

function filtrarContenido () {
    const animoElegido = selectAnimo.value;
    const tiempoElegido = selectTiempo.value;
    const tipoElegido = selectTipo.value;

    let resultados = catalogo;

    if(animoElegido !== "todos") {
        resultados = resultados.filter(item => item.animo.includes(animoElegido)
    );
    }

    if (tiempoElegido !== "todos") {
        const rango = rangosTiempo[tiempoElegido];
        resultados = resultados.filter(item => item.duracion >= rango.min && item.duracion <= rango.max
        );
    }

    if (tipoElegido !== "todos") {
        resultados = resultados.filter(item => item.tipo === tipoElegido);
    }

    if (animoElegido !== "todos") {
        localStorage.setItem("animo", animoElegido);
    }

    mostrarResultados(resultados);
}

// cards

function mostrarResultados(lista) {
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        mensaje.textContent = "No encontramos nada para esa combinación. ¡Probá otros filtros!";
        mensaje.style.display = "block";
        return;
    }

    mensaje.style.display = "none";

    const cantidad = lista.length;
    mensaje.textContent = `${cantidad} resultado${cantidad !== 1 ? "s" : ""} encontrado${cantidad !== 1 ? "s" : ""}`;
    mensaje.style.display = "block";

    lista.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", item.id);

        const tipoBadge = item.tipo === "serie" ? "Serie" : "Película";
        const badgeExtra = item.tipo === "película" ? "card-badge--pelicula" : "";
        const duracionTexto = item.tipo === "serie"
        ? `${item.duracion} min / ep.`
        : `${item.duracion} min`;
        const animoPrincipal = capitalizarAnimo(item.animo[0]);

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.imagen}" alt="${item.titulo}" class="card-img">
                <span class="card-badge ${badgeExtra}">${tipoBadge}
                </span>
            </div>
            <div class="card.body">
                <h3 class="card-titulo">${item.titulo}</h3>
                <div class="card-meta">
                    <span class="card-animo">${animoPrincipal}</span>
                    <span class="card-duracion">${duracionTexto}</span>
                </div>
                <button class= "btn-favorito" onclick="guardarFavorito(${item.id})"> Guardar
                </button>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// guardar en favoritos (usa localStorage, y lo lee favoritos.js)

function guardarFavorito(id) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const yaGuardado = favoritos.find(f => f.id === id);
    if (yaGuardado) {
        mostrarToast("Ya está en tus favoritos 👀");
        return;
    }

    const item = catalogo.find(c => c.id === id);
    if (!item) return;

    favoritos.push(item);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    mostrarToast(`✓ "${item.titulo}" agregado a favoritos`);

    const card = document.querySelector(`.card[data-id="${id}"] .btn-favorito`);
    if (card) {
        card.textContent = "✓ En favoritos";
        card.classList.add("btn-favorito--guardado");
        card.ariaDisabled = "true";
    }
}