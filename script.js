function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // Formatting to ensure two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

// Easter egg para el botón "Agregar"
document.getElementById('custom-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Esta funcionalidad se añadirá en versiones futuras. ¡Bienvenido a Infinity Nexus!');
});
