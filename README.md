# MoodFlix

## Descripción

MoodFlix es una aplicación web desarrollada para ayudar a los usuarios a encontrar películas y series según su estado de ánimo, el tiempo disponible y el tipo de contenido que desean consumir.

La plataforma busca mejorar la experiencia de búsqueda de entretenimiento mediante recomendaciones personalizadas, permitiendo además guardar contenidos favoritos para consultarlos posteriormente.

---

## Integrantes

* Ailin Garay
* Agustina Rivoira
* Mayra Limachi

---

## Idea elegida

**MoodFlix - Recomendador de contenido según el estado de ánimo**

El proyecto consiste en un recomendador de películas y series que adapta las sugerencias en función de diferentes criterios seleccionados por el usuario.

Las recomendaciones se generan considerando múltiples variables:

* Estado de ánimo.
* Tiempo disponible.
* Tipo de contenido.

De esta forma, cada usuario recibe opciones más acordes a sus preferencias y situación actual.

---
## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage

---

## Funcionalidades principales

* Recomendación de películas y series según el estado de ánimo del usuario.
* Filtrado por tiempo disponible.
* Filtrado por tipo de contenido (películas o series).
* Combinación de múltiples filtros para obtener recomendaciones personalizadas.
* Catálogo dinámico generado a partir de arrays de objetos en JavaScript.
* Sistema de favoritos utilizando LocalStorage.
* Prevención de elementos duplicados en favoritos.
* Eliminación de contenidos guardados en favoritos.
* Persistencia de preferencias del usuario entre sesiones.
* Recordatorio automático del último estado de ánimo seleccionado.
* Renderizado dinámico de tarjetas de contenido.
* Mensajes dinámicos de resultados encontrados o sin coincidencias.
* Notificaciones visuales (toast) al guardar contenido en favoritos.
* Navegación responsive con menú hamburguesa para dispositivos móviles.

---

## Estructura del proyecto

```text
MoodFlix/
│
├── index.html
│
├── icons/
│   └── palomitas-de-maiz.png
│
├── img/
│   ├── portada moodf.png
│   └── mujer mirando pelicula.jpg
│
├── pages/
│   ├── recomendador.html
│   └── favoritos.html
│
├── css/
│   ├── styles.css
│   ├── home.css
│   ├── recomendador.css
│   └── favoritos.css
│
└── js/
    ├── main.js
    ├── home.js
    ├── catalogo.js
    ├── recomendador.js
    └── favoritos.js

```

### Descripción de las carpetas

* **pages/**: contiene las páginas secundarias de la aplicación.
* **css/**: almacena los estilos generales y específicos de cada página.
* **js/**: contiene la lógica de funcionamiento, renderizado dinámico y manejo de favoritos.

---

## Instrucciones de uso

1. Ingresar a la página principal.
2. Acceder al recomendador.
3. Seleccionar un estado de ánimo.
4. Seleccionar el tiempo disponible.
5. Elegir el tipo de contenido deseado.
6. Presionar el botón de búsqueda.
7. Explorar las recomendaciones obtenidas.
8. Guardar contenidos en favoritos.
9. Consultar los favoritos desde la sección correspondiente.

---

## Enlaces

### Repositorio
[GitHub](https://github.com/Agustina-Riv/Moodflix-Project.git)

### Deploy
[Ver MoodFlix](https://agustina-riv.github.io/Moodflix-Project/)

---

## Uso de Inteligencia Artificial

Durante el desarrollo de MoodFlix se utilizaron herramientas de Inteligencia Artificial como apoyo para:

- Resolución de dudas técnicas.
- Optimización y refactorización de código.
- Asistencia en la documentación del proyecto.
- Consultas relacionadas con HTML, CSS y JavaScript.

Todas las decisiones de diseño, implementación, adaptación y validación final de las funcionalidades fueron realizadas por los integrantes del equipo.

### Evidencia de uso
[Informe de uso de IA](https://drive.google.com/file/d/1tZVou3rAde-BklLWJ8TkOaLbKZGPylel/view?usp=sharing)
