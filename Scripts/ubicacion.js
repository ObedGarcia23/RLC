// Agregar tu API Key de Google Maps
const apiKey = 'AIzaSyCiAW9ef5bbZNXsdCpP1rKs_7B1j0H0w8U';

function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Coordenadas de la ubicación de tu oficina

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Nuestra Oficina'
    });
}
