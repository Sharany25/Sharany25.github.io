// Array de textos que se cambiarán
const announcements = [
    "¡Nuevo producto disponible!",
    "Descubre nuestras ofertas especiales",
    "¡Registra tu cuenta y obtendrás un 10% de descuento!",
    "¡No te pierdas nuestras promociones!",
    "¡Comparte tus experiencias con nosotros!"
];

// Seleciona el elemento que contendrá el texto
const announcementText = document.getElementById("announcement-text");

// Índice actual del array de textos
let currentIndex = 0;

// Función que cambia el texto según la flecha clickeada
function changeAnnouncement(next) {
    if (next) {
        currentIndex = (currentIndex + 1) % announcements.length;
    } else {
        currentIndex = (currentIndex - 1 + announcements.length) % announcements.length;
    }

    // Cambia el texto
    announcementText.textContent = announcements[currentIndex];
}

// Muestra el primer texto
announcementText.textContent = announcements[currentIndex];