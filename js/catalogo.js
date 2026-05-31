const catalogo = [
  // ── SERIES ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    titulo: "Friends",
    tipo: "serie",
    animo: ["feliz", "aburrido"],
    duracion: 22,
    descripcion: "Seis amigos navegan la vida adulta en Nueva York con mucho humor.",
    imagen: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABel8GxLVuoCJ2IRDay-RvBrJrcJ7I-NOnRG_tI3s6HBOGmqT3ncq125Sjo5xHcKhNy6RAFgXjrVTSIUAIYQSZE4kUzqqzJ7pRyh9.jpg?r=069"
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    animo: ["aburrido"],
    duracion: 47,
    descripcion: "Un profesor de química se convierte en el mayor productor de metanfetamina de EE.UU.",
    imagen: "https://i0.wp.com/hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?fit=1000%2C500&ssl=1"
  },
  {
    id: 3,
    titulo: "Fleabag",
    tipo: "serie",
    animo: ["triste", "aburrido"],
    duracion: 25,
    descripcion: "Una mujer londinense lidia con el duelo y el caos de su vida con humor ácido.",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d1409c01a1ebad78bcdfe486b0ee2a8300ae3c1a3008d135ce46286be4a13c08.jpg"
  },
  {
    id: 4,
    titulo: "Bridgerton",
    tipo: "serie",
    animo: ["romantico"],
    duracion: 60,
    descripcion: "Intrigas y romances en la alta sociedad londinense del siglo XIX.",
    imagen: "https://media.a24.com/p/cedb391e3985a508f4ef6cbed934e46d/adjuntos/296/imagenes/009/679/0009679045/1200x675/smart/bridgerton-4-netflix.jpg"
  },
  {
    id: 5,
    titulo: "Normal People",
    tipo: "serie",
    animo: ["romantico", "triste"],
    duracion: 30,
    descripcion: "Una historia de amor intensa y delicada entre dos jóvenes irlandeses.",
    imagen: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5553c84f-ed0d-4b76-a449-a65e24cb857f/compose?aspectRatio=1.78&format=webp&width=1200"
  },
  {
    id: 6,
    titulo: "The Bear",
    tipo: "serie",
    animo: ["aburrido"],
    duracion: 35,
    descripcion: "Un chef de alta cocina regresa a Chicago para salvar el restaurant familiar.",
    imagen: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/416792e9-da2f-4797-9579-c4fcbaba8a72/compose?aspectRatio=1.78&format=webp&width=1200"
  },
  {
    id: 7,
    titulo: "Schitt's Creek",
    tipo: "serie",
    animo: ["feliz", "triste"],
    duracion: 22,
    descripcion: "Una familia millonaria lo pierde todo y debe rehacer su vida en un pueblo pequeño.",
    imagen: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUgkV3TotjEh1xVnoK2r7Gc0-LJPXStn_nZOCG0kCCaITNPTRC4Yr0EkhU9Eo7wDzYWGpa6OByg-OO_kDNW2XCPRaAVQSv_r-E1l.jpg?r=f7e"
  },
  {
    id: 8,
    titulo: "Dark",
    tipo: "serie",
    animo: ["aburrido"],
    duracion: 60,
    descripcion: "El misterio de la desaparición de un niño revela viajes en el tiempo en un pueblo alemán.",
    imagen: "https://www.rockandpop.cl/wp-content/uploads/2020/06/e39d35b0585f4eed8b87c475aa933495-768x512.jpg"
  },
  {
    id: 9,
    titulo: "Sex Education",
    tipo: "serie",
    animo: ["feliz", "romantico"],
    duracion: 45,
    descripcion: "Un adolescente tímido monta una clínica sexual clandestina en su colegio.",
    imagen: "https://www.agenciapacourondo.com.ar/sites/www.agenciapacourondo.com.ar/files/sex-education-season-3-ppal.jpg"
  },
  {
    id: 10,
    titulo: "Euphoria",
    tipo: "serie",
    animo: ["triste"],
    duracion: 55,
    descripcion: "Adolescentes americanos navegan identidad, trauma, drogas y amor.",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/f29b918e36fef64cdf81d9d3b10864c36bbd7911d1ea1d4e6abb2299a10e1809.jpg"
  },
  {
    id: 11,
    titulo: "Sense8: El Episodio Final",
    tipo: "serie",
    animo: ["feliz", "romantico"],
    duracion: 151,
    descripcion: "El cierre cinematográfico de la historia de los ocho conectados alrededor del mundo.",
    imagen: "https://resizing.flixster.com/eIF0o1iWoMDq63ZdmPn1Vd3t-Pc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11677721_b_h10_aa.jpg"
  },

  // ── PELÍCULAS ───────────────────────────────────────────────────────────────
  {
    id: 12,
    titulo: "La La Land",
    tipo: "pelicula",
    animo: ["romantico", "triste"],
    duracion: 128,
    descripcion: "Un músico y una actriz se enamoran persiguiendo sus sueños en Los Ángeles.",
    imagen: "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZsasO09j8Jm38swALhu_iu7yvRYG9yuF3e-k5rpg7KSu5ueUD-qAfH5nCnKvStnuFQx-F0OQGqUzxEkcG2PCf9oP5XFCb7FJQxi.jpg?r=ada"
  },
  {
    id: 13,
    titulo: "Superbad",
    tipo: "pelicula",
    animo: ["feliz", "aburrido"],
    duracion: 113,
    descripcion: "Dos mejores amigos intentan vivir la noche de su vida antes de terminar el secundario.",
    imagen: "https://dchsparnassus.com/wp-content/uploads/2026/01/f861c096-88d3-4b6d-8b8a-9c6899a68a7e.webp"
  },
  {
    id: 14,
    titulo: "Eternal Sunshine of the Spotless Mind",
    tipo: "pelicula",
    animo: ["triste", "romantico"],
    duracion: 108,
    descripcion: "Una pareja decide borrarse mutuamente de la memoria tras su separación.",
    imagen: "https://dzvwd8wxognhf.cloudfront.net/cache/6/8/f/1/d/d/68f1dd1ed8483e29b04aeaf1e6ab97f822e2dba9.jpeg"
  },
  {
    id: 15,
    titulo: "Coco",
    tipo: "pelicula",
    animo: ["feliz", "triste"],
    duracion: 105,
    descripcion: "Un niño viaja al mundo de los muertos para encontrar a su tatarabuelo músico.",
    imagen: "https://c.files.bbci.co.uk/D5C5/production/_98852745_coco1.jpg"
  },
  {
    id: 16,
    titulo: "The Notebook",
    tipo: "pelicula",
    animo: ["romantico"],
    duracion: 123,
    descripcion: "Una historia de amor épica que atraviesa décadas y diferencias de clase.",
    imagen: "https://spoilertown.com/wp-content/uploads/2024/10/the-notebook-2004.webp"
  },
  {
    id: 17,
    titulo: "Knives Out",
    tipo: "pelicula",
    animo: ["aburrido", "feliz"],
    duracion: 130,
    descripcion: "Un detective investiga la misteriosa muerte del patriarca de una familia adinerada.",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/b9067566ef4a4a5f2d54d206afaa9a1f7fbd134509a50b0b94003b1f51e8e9ec.jpg"
  },
  {
    id: 18,
    titulo: "About Time",
    tipo: "pelicula",
    animo: ["romantico", "feliz"],
    duracion: 123,
    descripcion: "Un joven descubre que puede viajar en el tiempo y decide usarlo para encontrar el amor.",
    imagen: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXMZlCiZsx_JFoY2zd6yzSuH-x9aY8_pI9LjHSHPS-ECz-5IRbSNcOF8bpG4VRDWWV030Zj0m8kxQQuOQGf1fbASjWpJr8t2dIbJ.jpg?r=697"
  },
  {
    id: 19,
    titulo: "Her",
    tipo: "pelicula",
    animo: ["triste", "romantico"],
    duracion: 126,
    descripcion: "Un hombre solitario se enamora de una inteligencia artificial.",
    imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZx-ClXNUmwqwydeMByCIX4MsZL_eHHA7OxTUFF2P8-CvK0uXMJaNJ_rD5zBTArpakBIBM7WL9xSH_4U1FIge9STuJjV7BxGpX4J.jpg?r=93a"
  },
  {
    id: 20,
    titulo: "The Grand Budapest Hotel",
    tipo: "pelicula",
    animo: ["feliz", "aburrido"],
    duracion: 99,
    descripcion: "Las aventuras del excéntrico gerente de un famoso hotel europeo entre guerras.",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/gran-hotel-budapest-cartel-1513779850.jpg?crop=1xw:0.9375xh;center,top&resize=1200:*"
  },
  {
    id: 21,
    titulo: "Midsommar",
    tipo: "pelicula",
    animo: ["triste"],
    duracion: 148,
    descripcion: "Una pareja viaja a Suecia y queda atrapada en un festival pagano que se vuelve aterrador.",
    imagen: "https://ih1.redbubble.net/image.4934201950.7071/fposter,small,wall_texture,product,750x1000.jpg"
  },
];