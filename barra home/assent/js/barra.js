var bar = document.getElementById("bar");
var bars = document.getElementById("bars");
var closes = document.getElementById("closes");

function abrirBara() {
    bar.classList.add("total");
    bars.style.display = "none";
    closes.style.display = "block";
}

function CerrarBarra() {
    bar.classList.remove("total");
    bars.style.display = "block";
    closes.style.display = "none";
}

var textoGenerado = document.getElementById("texto-generado");

function modalNotificacion() {
    var modalNoti = document.getElementById("modal-Notificaciones")
    modalNoti.style.display = "block";
}

function modalNotificacionX() {
    var modalNoti = document.getElementById("modal-Notificaciones")
    modalNoti.style.display = "none";
}

var infor = document.getElementById("infor");

infor.onclick = function () {
    var setingt = document.getElementById("setingt");
    setingt.style.display = "block";
    setTimeout(() => {
        var setingt = document.getElementById("setingt");
        setingt.style.display = "none";
    }, 5000);
}

function salir() {
    localStorage.removeItem("lastSecurityCheckDate");
    location.reload();
}

function BorrarTodo() {
    localStorage.clear();
    location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    verificarLogo();
    var intervalo = setInterval(verificarLogo, 1000);

});

function verificarLogo() {
    var logo = document.getElementById("overlay");

    if (!logo) {

        var audio = new Audio('./assent/audio/señora_su_hijo_su_hijo_esta_viendo_nopor.mp3');
        audio.play();

        document.body.innerHTML = `    
      <h1 style="font-size: 50px;  position: fixed; z-index:10000; background: #000 ; color: #fff;  top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);"> jajajaja capo te crees</h1> 
      `;

        clearInterval(intervalo);
    }
}