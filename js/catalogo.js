const catalogo = [
  // ── SERIES ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    titulo: "Friends",
    tipo: "serie",
    animo: ["feliz", "aburrido"],
    duracion: 22,
    descripcion: "Seis amigos navegan la vida adulta en Nueva York con mucho humor.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Friends"
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    animo: ["aburrido"],
    duracion: 47,
    descripcion: "Un profesor de química se convierte en el mayor productor de metanfetamina de EE.UU.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Breaking+Bad"
  },
  {
    id: 3,
    titulo: "Fleabag",
    tipo: "serie",
    animo: ["triste", "aburrido"],
    duracion: 25,
    descripcion: "Una mujer londinense lidia con el duelo y el caos de su vida con humor ácido.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Fleabag"
  },
  {
    id: 4,
    titulo: "Bridgerton",
    tipo: "serie",
    animo: ["romantico"],
    duracion: 60,
    descripcion: "Intrigas y romances en la alta sociedad londinense del siglo XIX.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Bridgerton"
  },
  {
    id: 5,
    titulo: "Normal People",
    tipo: "serie",
    animo: ["romantico", "triste"],
    duracion: 30,
    descripcion: "Una historia de amor intensa y delicada entre dos jóvenes irlandeses.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Normal+People"
  },
  {
    id: 6,
    titulo: "The Bear",
    tipo: "serie",
    animo: ["aburrido"],
    duracion: 35,
    descripcion: "Un chef de alta cocina regresa a Chicago para salvar el restaurant familiar.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=The+Bear"
  },
  {
    id: 7,
    titulo: "Schitt's Creek",
    tipo: "serie",
    animo: ["feliz", "triste"],
    duracion: 22,
    descripcion: "Una familia millonaria lo pierde todo y debe rehacer su vida en un pueblo pequeño.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Schitt%27s+Creek"
  },
  {
    id: 8,
    titulo: "Dark",
    tipo: "serie",
    animo: ["aburrido"],
    duracion: 60,
    descripcion: "El misterio de la desaparición de un niño revela viajes en el tiempo en un pueblo alemán.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Dark"
  },
  {
    id: 9,
    titulo: "Sex Education",
    tipo: "serie",
    animo: ["feliz", "romantico"],
    duracion: 45,
    descripcion: "Un adolescente tímido monta una clínica sexual clandestina en su colegio.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Sex+Education"
  },
  {
    id: 10,
    titulo: "Euphoria",
    tipo: "serie",
    animo: ["triste"],
    duracion: 55,
    descripcion: "Adolescentes americanos navegan identidad, trauma, drogas y amor.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Euphoria"
  },
  {
    id: 11,
    titulo: "Sense8: El Episodio Final",
    tipo: "serie",
    animo: ["feliz", "romantico"],
    duracion: 151,
    descripcion: "El cierre cinematográfico de la historia de los ocho conectados alrededor del mundo.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Sense8"
  },

  // ── PELÍCULAS ───────────────────────────────────────────────────────────────
  {
    id: 12,
    titulo: "La La Land",
    tipo: "pelicula",
    animo: ["romantico", "triste"],
    duracion: 128,
    descripcion: "Un músico y una actriz se enamoran persiguiendo sus sueños en Los Ángeles.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=La+La+Land"
  },
  {
    id: 13,
    titulo: "Superbad",
    tipo: "pelicula",
    animo: ["feliz", "aburrido"],
    duracion: 113,
    descripcion: "Dos mejores amigos intentan vivir la noche de su vida antes de terminar el secundario.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Superbad"
  },
  {
    id: 14,
    titulo: "Eternal Sunshine of the Spotless Mind",
    tipo: "pelicula",
    animo: ["triste", "romantico"],
    duracion: 108,
    descripcion: "Una pareja decide borrarse mutuamente de la memoria tras su separación.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Eternal+Sunshine"
  },
  {
    id: 15,
    titulo: "Coco",
    tipo: "pelicula",
    animo: ["feliz", "triste"],
    duracion: 105,
    descripcion: "Un niño viaja al mundo de los muertos para encontrar a su tatarabuelo músico.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Coco"
  },
  {
    id: 16,
    titulo: "The Notebook",
    tipo: "pelicula",
    animo: ["romantico"],
    duracion: 123,
    descripcion: "Una historia de amor épica que atraviesa décadas y diferencias de clase.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=The+Notebook"
  },
  {
    id: 17,
    titulo: "Knives Out",
    tipo: "pelicula",
    animo: ["aburrido", "feliz"],
    duracion: 130,
    descripcion: "Un detective investiga la misteriosa muerte del patriarca de una familia adinerada.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Knives+Out"
  },
  {
    id: 18,
    titulo: "About Time",
    tipo: "pelicula",
    animo: ["romantico", "feliz"],
    duracion: 123,
    descripcion: "Un joven descubre que puede viajar en el tiempo y decide usarlo para encontrar el amor.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=About+Time"
  },
  {
    id: 19,
    titulo: "Her",
    tipo: "pelicula",
    animo: ["triste", "romantico"],
    duracion: 126,
    descripcion: "Un hombre solitario se enamora de una inteligencia artificial.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Her"
  },
  {
    id: 20,
    titulo: "The Grand Budapest Hotel",
    tipo: "pelicula",
    animo: ["feliz", "aburrido"],
    duracion: 99,
    descripcion: "Las aventuras del excéntrico gerente de un famoso hotel europeo entre guerras.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Grand+Budapest"
  },
  {
    id: 21,
    titulo: "Midsommar",
    tipo: "pelicula",
    animo: ["triste"],
    duracion: 148,
    descripcion: "Una pareja viaja a Suecia y queda atrapada en un festival pagano que se vuelve aterrador.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Midsommar"
  },
  {
    id: 22,
    titulo: "Si Algo Me Pasa, Los Quiero",
    tipo: "Pelicula",
    animo: ["triste"],
    duracion: 12,
    descripcion: "Un cortometraje ilustrado sumamente emotivo sobre el duelo y la superación familiar.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Si+Algo+Me+Pasa"
  },
  {
    id: 23,
    titulo: "La Lista de Schindler",
    tipo: "Pelicula",
    animo: ["triste"],
    duracion: 195,
    descripcion: "Un empresario alemán salva la vida de más de mil judíos durante la Segunda Guerra Mundial.",
    imagen: "https://placehold.co/300x170/1a1a2e/e0e0ff?text=Schindler"
  }
];