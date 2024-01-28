const notifications = document.createElement("div");
notifications.classList.add("Notificacion_Pgx");
notifications.id = "Notificacion_Pgx";

function showMessage({
    PGX_Tipo,
    PGX_Titulo,
    PGX_Texto,
    PGX_Duracion,
    PGX_Gravitacion,
    PGX_Posicion,
    PGX_OnClick,
}) {

let icon;
let notificationClass;

    switch (PGX_Tipo) {
        case "exitoso":
            icon = "fa-check";
            notificationClass = "exitoso";
            break;
        case "alerta":
            icon = "fa-exclamation-triangle";
            notificationClass = "alerta";
            break;
        case "interrogacion":
            icon = "fa-question";
            notificationClass = "interrogacion";
            break;
        case "error":
            icon = "fa-times";
            notificationClass = "error";
            break;
        default:
            icon = "fa-info-circle";
            notificationClass = "default";
            break;
    }

    notifications.classList.add(notificationClass);

    let Gravitacion;
    switch (PGX_Gravitacion) {
        case "arriba":
            Gravitacion = "top: 2%;";
            break;
        case "abajo":
            Gravitacion = "bottom: 2%;";
            break;
        case "centro":
            Gravitacion = "top: 50%;";
            break;
        default:
            Gravitacion = "top: 0;";
            break;
    }

    let Posicion;
    switch (PGX_Posicion) {
        case "izquierda":
            Posicion = "right: 2%;";
            break;
        case "derecha":
            Posicion = "left: 2%;";
            break;
        case "centro":
            Posicion = "left: 50%; transform: translate(-50%, -50%);";
            break;
        default:
            Posicion = "top: 0;";
            break;
    }

    notifications.style.cssText = `${Gravitacion} ${Posicion}`;
    notifications.innerHTML = `
        <div class="icon_mensaje">
            <i class="fas ${icon}"></i>
        </div>
        <div class="mensaje">
            <h1>${PGX_Titulo}</h1>
            <p>${PGX_Texto}</p>
        </div>
        <span class="PGX_Close" onclick="cerrarNotificacion()">&times;</span>
        `;

    document.body.appendChild(notifications);
    setTimeout(() => {
        notifications.classList.add("ab");
        if ("centro") {
            notifications.style = "transform: translate(-500%, -50%);";
        }
    }, PGX_Duracion);

    if (PGX_OnClick) {
        notifications.addEventListener("click", () => {
            PGX_OnClick;
        });
    }
}

function cerrarNotificacion() {
    var Notificacion_Pgx = document.getElementById("Notificacion_Pgx");
    Notificacion_Pgx.remove();
}

export function showMessage_pgx(Tipo_Pgx, Titulo_Pxg, Gravitacion_Pxg, Posicion_Pxg, Message_Pgx) {
    showMessage({
        PGX_Tipo: Tipo_Pgx,
        PGX_Titulo: Titulo_Pxg,
        PGX_Texto: Message_Pgx,
        PGX_Duracion: 2100,
        PGX_Gravitacion: Gravitacion_Pxg,
        PGX_Posicion: Posicion_Pxg,
    });
}