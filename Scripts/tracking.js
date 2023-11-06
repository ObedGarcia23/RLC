document.getElementById("track-button").addEventListener("click", function () {
    const trackingNumber = document.getElementById("tracking-number").value;

    // Simulación de datos de ubicaciones anteriores (reemplaza con datos reales)
    const previousLocations = [
        {
            date: "2023-10-10",
            time: "10:30 AM",
            description: "Recibido en el almacén de origen"
        },
        {
            date: "2023-10-11",
            time: "2:15 PM",
            description: "Salida del almacén de origen"
        },
        {
            date: "2023-10-12",
            time: "8:45 AM",
            description: "Llegada al almacén de destino"
        },
        {
            date: "2023-10-13",
            time: "4:30 PM",
            description: "Entregado al destinatario"
        }
    ];

    // Invertir el orden de los datos de ubicaciones anteriores para mostrar el último primero
    previousLocations.reverse();

    const trackingResults = document.getElementById("tracking-results");
    const trackingNumberDisplay = document.getElementById("tracking-number-display");
    const previousLocationsList = document.getElementById("previous-locations");

    trackingResults.style.display = "block";
    trackingNumberDisplay.textContent = trackingNumber;

    // Mostrar ubicaciones anteriores
    previousLocationsList.innerHTML = "";
    previousLocations.forEach(location => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="location-column">
                <p class="location-date">${location.date}</p>
                <p class="location-time">${location.time}</p>
            </div>
            <div class="location-description">
                <p>${location.description}</p>
            </div>
        `;
        previousLocationsList.appendChild(listItem);
    });
});
