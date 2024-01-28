// main.js
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";
// import "./app/subirPublicacion.js"; // Importar subirPublicacion.js

import './app/informacion.js'

// import './app/signupForm.js'
// import './app/signinForm.js'
import './app/googleLogin.js'
// import './app/facebookLogin.js'
// import './app/githubLogin.js'
import './app/logout.js'
import './app/postList.js'

// Listener para cambios en el estado de autenticación
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error);
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
});