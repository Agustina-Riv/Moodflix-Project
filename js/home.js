// Comprobación rápida en la consola
console.log("¡El archivo JS de MoodFlix se está ejecutando correctamente!");

// Función directa para el saludo
function mostrarSaludo() {
    const contenedorSaludo = document.getElementById("saludo-dinamico");
    
    if (contenedorSaludo) {
        const hora = new Date().getHours();
        let textoSaludo = "";

        if (hora >= 6 && hora < 12) {
            textoSaludo = "¡Buenos días! ☀️";
        } else if (hora >= 12 && hora < 20) {
            textoSaludo = "¡Buenas tardes! 🍿";
        } else {
            textoSaludo = "¡Buenas noches! 🎬";
        }

        contenedorSaludo.innerText = textoSaludo;
    }
}

// Ejecutamos la función inmediatamente
mostrarSaludo();

document.addEventListener("DOMContentLoaded", () => {
    const contenedorSaludo = document.getElementById("saludo-dinamico");
    
    if (contenedorSaludo) {
        contenedorSaludo.style.whiteSpace = "pre-wrap"; 
        
        const hora = new Date().getHours();
        let textoSaludo = "";

        if (hora >= 6 && hora < 12) {
            textoSaludo = "¡Buenos días!";
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
});