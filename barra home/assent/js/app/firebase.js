import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBClYt_Sl2Z6TX9onQ1wjvwoSmLm2Tlai8",
  authDomain: "dodo-3f36a.firebaseapp.com",
  projectId: "dodo-3f36a",
  storageBucket: "dodo-3f36a.appspot.com",
  messagingSenderId: "994411779410",
  appId: "1:994411779410:web:c37a1019da2bfa7a28968b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)