const containerFavoritos = document.getElementById("favorites-container");
const emptyState = document.getElementById("empty-state");

function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
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

function renderizarFavoritos() {
    const favoritos = obtenerFavoritos();

    containerFavoritos.innerHTML = "";

    if (favoritos.length === 0) {
        emptyState.style.display = "block";
        containerFavoritos.style.display = "none";
        return;
    }

    emptyState.style.display = "none";
    containerFavoritos.style.display = "grid";

    favoritos.forEach(item => {
        const tipoBadge = item.tipo === "serie" ? "Serie" : "Película";

        const duracionTexto = item.tipo === "serie"
            ? `${item.duracion} min / ep.`
            : `${item.duracion} min`;

        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-image">
                <img src="${item.imagen}" alt="${item.titulo}" class="card-img">

                <span class="badge">${tipoBadge}</span>
            </div>

            <div class="card-body">
                <h3>${item.titulo}</h3>

                <p class="card-description">
                    ${item.descripcion}
                </p>

                <div class="card-meta">
                    <span>${capitalizarAnimo(item.animo[0])}</span>
                    <span>⏱️ ${duracionTexto}</span>
                </div>

                <button class="btn btn-danger">
                    Eliminar 🗑️
                </button>
            </div>
        `;

        containerFavoritos.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderizarFavoritos);