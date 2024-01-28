import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

// const informacionDiv = document.querySelector("#informacion");

// Escuchar cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Si el usuario está autenticado, mostrar su información
    mostrarInformacionUsuario(user);
    // Verificar si el usuario es admin y realizar acciones específicas
  } else {
    // Si el usuario no está autenticado, limpiar la información
    limpiarInformacionUsuario();
  }
});

function mostrarInformacionUsuario(user) {
  const { displayName, photoURL, email } = user;

  // Crear HTML con la información del usuario
  // const adminTag = user.uid === "vUYeQEgP51QjBSYNoAzQUFQDaVC2" ? " admin" : "";
  
  var texto_generado = document.getElementById("texto-generado");
  texto_generado.value = displayName; //+ //adminTag; 
  
  var img_user = document.getElementById("img-user");
  img_user.src = photoURL;

  var texto_Gmail = document.getElementById("texto-Gmail");
  texto_Gmail.value = email;


  // Mostrar la información en el div correspondiente
  // informacionDiv.innerHTML = html;
}

function limpiarInformacionUsuario() {
  // Limpiar el contenido del div si el usuario no está autenticado
  informacionDiv.innerHTML = "";
}
