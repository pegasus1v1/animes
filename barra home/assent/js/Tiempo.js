var climas = document.getElementById("climas");

climas.onclick = function(){
    climas.style.display = "none";
    var tiempo = document.getElementById("tiempo");
    tiempo.style.display = "flex";
    setTimeout(() => {
        tiempo.style.display = "none";
        climas.style.display = "block";
    }, 5000);
}

const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
}


const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');

// Función para verificar si se ha realizado una búsqueda hoy
function hasSearchedToday() {
    const lastSearchDate = localStorage.getItem('lastSearchDate');
    if (lastSearchDate) {
        const today = new Date().toLocaleDateString();
        return lastSearchDate === today;
    }
    return false;
}

// Función para marcar que se ha realizado una búsqueda hoy
function markSearchedToday() {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('lastSearchDate', today);
}

// Función para guardar los datos de la última búsqueda
function saveLastSearch(data) {
    localStorage.setItem('lastSearchData', JSON.stringify(data));
}

// Función para obtener los datos de la última búsqueda guardada
function getLastSearchData() {
    const savedData = localStorage.getItem('lastSearchData');
    return savedData ? JSON.parse(savedData) : null;
}


function updateImages(data) {
    const tempValue = toCelsius(data.main.temp);
    let iconClass = 'fa-cloud-sun'; // Icono por defecto si la temperatura no coincide con ninguna condición
    if (tempValue > 26) {
        iconClass = 'fa-sun'; // Icono para temperaturas altas
    } else if (tempValue < 20) {
        iconClass = 'fa-snowflake'; // Icono para temperaturas bajas
    }
    tempImg.className = `fas ${iconClass} fa-3x`; // Agrega la clase del icono de Font Awesome
}

async function searchByCoordinates(lat, lon) {
    try {
        const response = await fetch(`${api.url}?lat=${lat}&lon=${lon}&appid=${api.key}&lang=es`);
        const data = await response.json();
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
        // Cambia las clases de los iconos de Font Awesome aquí
        weather.innerHTML = `${data.weather[0].description}`;
        updateImages(data);
        // Guardar los datos de la última búsqueda
        saveLastSearch(data);
    } catch (err) {
        console.error(err);
        alert('Hubo un error');
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

// Obtener la ubicación del usuario automáticamente al cargar la página
window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        // Verificar si ya se ha realizado una búsqueda hoy
        if (!hasSearchedToday()) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                searchByCoordinates(lat, lon);
                // Marcar que se ha realizado una búsqueda hoy
                markSearchedToday();
            });

            // Actualizar la información cada 5 minutos (300,000 milisegundos)
            setInterval(() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    searchByCoordinates(lat, lon);
                });
            }, 3000);
        } else {
            // Si ya se ha realizado una búsqueda hoy, mostrar los datos de la última búsqueda guardada
            const lastSearchData = getLastSearchData();
            if (lastSearchData) {
                city.innerHTML = `${lastSearchData.name}, ${lastSearchData.sys.country}`;
                date.innerHTML = (new Date()).toLocaleDateString();
                temp.innerHTML = `${toCelsius(lastSearchData.main.temp)}°C`;
                // Cambia las clases de los iconos de Font Awesome aquí
                weather.innerHTML = `<i class="fas fa-sun"></i> ${lastSearchData.weather[0].description}`;
                updateImages(lastSearchData);
            } else {
                console.log("No se encontraron datos de búsqueda previos.");
            }
        }
    } else {
        alert("La geolocalización no está disponible en este navegador.");
    }
});