$(document).ready(function () {
    // Cargar botones almacenados en el localStorage al iniciar
    cargarBotones();

    // Evento de clic en el botón "Agregar Btn"
    $("#Agregar").on("click", function () {
        // Obtener valores del modal
        var selectedTablero = $("#selec_tableros").val();
        var nombreBtn = $("#Nombre").val();
        var urlBtn = $("#Url").val();
        var colorBtn = $("#color").val();
        var colorBtnBac = $("#colorBtnBac").val();
        var Faviconsrc = $("#faviconInput").val();

        // Crear el contenedor div para el botón y el ícono de eliminar
        var contenedor = document.createElement("div");
        contenedor.className = "conternedora";
        contenedor.id = "btn_" + Date.now();  // Usar una marca de tiempo única como identificador

        var ImgIcon = document.createElement("img");
        ImgIcon.src = Faviconsrc;
        // Crear el botón con los valores dados
        var nuevoBtn = document.createElement("a");
        nuevoBtn.href = urlBtn;
        nuevoBtn.target = "_blank";
        nuevoBtn.className = "links";
        nuevoBtn.style.backgroundColor = colorBtnBac;
        nuevoBtn.style.color = colorBtn;
        nuevoBtn.textContent = nombreBtn;

        // Crear el ícono de eliminar
        var removebtn = document.createElement("i");
        removebtn.className = "fa fa-trash-can";
        removebtn.id = "removebtn";
        removebtn.onclick = function () {
            // Eliminar el botón y guardarlo en el localStorage
            eliminarBoton(selectedTablero, contenedor.id);
        };

        // Agregar el botón y el ícono de eliminar al contenedor
        nuevoBtn.appendChild(ImgIcon);

        contenedor.appendChild(nuevoBtn);
        contenedor.appendChild(removebtn);

        // Agregar el contenedor al tablero seleccionado
        $("#" + selectedTablero + " .btns_links").append(contenedor);

        // Guardar el botón en el localStorage
        guardarBoton(selectedTablero, contenedor.outerHTML);

        // Cerrar el modal (puedes ajustar esto según tu implementación)
        $("#modal").hide();
    });

    // Función para cargar botones almacenados en el localStorage
    function cargarBotones() {
        for (var i = 1; i <= 3; i++) {
            var storedButtons = JSON.parse(localStorage.getItem('botones_tablero' + i)) || [];
            for (var j = 0; j < storedButtons.length; j++) {
                var contenedor = document.createElement("div");
                contenedor.innerHTML = storedButtons[j];
                $("#" + 'tab' + i + " .btns_links").append(contenedor);
                // Añadir eventos a los botones cargados
                agregarEventosBotones(contenedor);
            }
        }
    }

    // Función para guardar un botón en el localStorage
    function guardarBoton(tablero, nuevoBtnHTML) {
        var storedButtons = JSON.parse(localStorage.getItem('botones_tablero' + tablero.slice(-1))) || [];
        storedButtons.push(nuevoBtnHTML);
        localStorage.setItem('botones_tablero' + tablero.slice(-1), JSON.stringify(storedButtons));

    }

    // Función para eliminar un botón y guardarlo en el localStorage
    function eliminarBoton(tablero, idContenedor) {
        // Eliminar el contenedor del DOM
        $("#" + idContenedor).remove();

        // Eliminar el botón del localStorage
        var storedButtons = JSON.parse(localStorage.getItem('botones_tablero' + tablero.slice(-1))) || [];
        storedButtons = storedButtons.filter(function (botonHTML) {
            return botonHTML.indexOf(idContenedor) === -1;
        });
        localStorage.setItem('botones_tablero' + tablero.slice(-1), JSON.stringify(storedButtons));

    }

    // Función para agregar eventos a los botones
    function agregarEventosBotones(contenedor) {
        var removebtn = contenedor.querySelector('.fa-trash-can');
        removebtn.style.display = "none";
        removebtn.onclick = function () {
            var selectedTablero = obtenerNumeroTablero(contenedor.parentNode.id);
            eliminarBoton('tab' + selectedTablero, contenedor.id);
        };
    }

    // Función para obtener el número del tablero a partir del ID
    function obtenerNumeroTablero(tableroId) {
        return tableroId.replace('tab', '');
    }

    // ... (resto del código)
});

// Agregar evento después de cargar la página para manejar eventos en botones
$(window).on('load', function () {
    // Recorrer todos los contenedores de botones y agregar eventos
    $('.conternedora').each(function () {
        agregarEventosBotones(this);
    });
});

function mostrarFavicon() {
    var urlInput = document.getElementById('Url').value;
    var faviconInput = document.getElementById('faviconInput');

    // Extraer el dominio de la URL
    var dominio = obtenerDominio(urlInput);

    // Construir la URL del favicon
    var faviconUrl = 'https://www.google.com/s2/favicons?domain=' + dominio;

    // Establecer el valor del campo de entrada del favicon
    faviconInput.value = faviconUrl;
}

function obtenerDominio(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}


function dalte1() {
    localStorage.removeItem("botones_tablero1");
    location.reload();
}

function dalte2() {
    localStorage.removeItem("botones_tablero2");
    location.reload();
}

function dalte3() {
    localStorage.removeItem("botones_tablero3");
    location.reload();
}

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}
function colsemodal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const close_modal = document.getElementById("close_modal");
const boton1 = document.getElementById('agregar_links1');
const boton2 = document.getElementById('agregar_links2');
const boton3 = document.getElementById('agregar_links3');

close_modal.addEventListener('click', colsemodal);
boton1.addEventListener('click', abrirModal);
boton2.addEventListener('click', abrirModal);
boton3.addEventListener('click', abrirModal);