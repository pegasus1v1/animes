function checkEnter(event) {
    if (event.key === "Enter") {
        buscar();
    }
}

function buscar() {
    // Obtener el valor seleccionado del <select>
    var tipoDeRed = document.getElementById("TipoDeRed");
    var opcionSeleccionada = tipoDeRed.value;
    var nombreBuscado = document.getElementById("Nombre_buscado").value;

    var urlBusqueda = "";

    if (opcionSeleccionada === 'google') {
        urlBusqueda = "https://www.google.com/search?q=" + nombreBuscado;
    } else if (opcionSeleccionada === 'youtube') {
        urlBusqueda = "https://www.youtube.com/results?search_query=" + nombreBuscado;
    } else if (opcionSeleccionada === 'Tokio') {
        urlBusqueda = "https://www.google.com/search?q=ver+" + nombreBuscado + "+en+tokyvideo+español+latino";
    }

    var nombreBuscado = document.getElementById("Nombre_buscado").value = "";

    window.open(urlBusqueda, "_blank");
}

var tipoDeRed = document.getElementById("TipoDeRed");
tipoDeRed.addEventListener('change', function() {
});

