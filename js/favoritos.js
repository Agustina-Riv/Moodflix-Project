const containerFavoritos = document.getElementById("favorites-container");
const contadorFavoritos = document.getElementById("contador-favoritos");
const emptyState = document.getElementById("empty-state");
const btnEliminarTodos = document.getElementById("btn-eliminar-todos");
const modal = document.getElementById("modal-confirmacion");
const btnCancelar = document.getElementById("cancelar-modal");
const btnConfirmar = document.getElementById("confirmar-modal");

function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function renderizarFavoritos() {
    const favoritos = obtenerFavoritos();

    containerFavoritos.innerHTML = "";
    contadorFavoritos.textContent = favoritos.length;

    if (favoritos.length === 0) {
        emptyState.style.display = "block";
        containerFavoritos.style.display = "none";
        btnEliminarTodos.style.display = "none";
        return;
    }

    emptyState.style.display = "none";
    containerFavoritos.style.display = "grid";
    
    favoritos.forEach(item => {
        const tipoBadge = item.tipo === "serie" ? "Serie" : "Pelicula";

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

                <button class="btn btn-danger btn-eliminar" data-id="${item.id}">
                    Eliminar 🗑️
                </button>
            </div>
        `;

        containerFavoritos.appendChild(card);
        const botonEliminar = card.querySelector(".btn-eliminar");

        botonEliminar.addEventListener("click", () => {
            eliminarFavorito(item.id);
        });
    });
}

function eliminarFavorito(id) {
    let favoritos = obtenerFavoritos();

    favoritos = favoritos.filter(item => item.id !== id);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    renderizarFavoritos();
}

btnEliminarTodos.addEventListener("click", () => {
    modal.style.display = "flex";
});

btnCancelar.addEventListener("click", () => {
    modal.style.display = "none";
});

btnConfirmar.addEventListener("click", () => {
    localStorage.removeItem("favoritos");

    modal.style.display = "none";

    renderizarFavoritos();
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", renderizarFavoritos);