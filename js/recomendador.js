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