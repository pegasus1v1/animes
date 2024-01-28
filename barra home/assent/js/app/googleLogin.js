import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
// import { showMessage } from "./showMessage.js";
import { showMessage_pgx } from "../notificaciones.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    showMessage_pgx("exitoso", "Bienvenida", "abajo", "izquierda", "Hola " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
});