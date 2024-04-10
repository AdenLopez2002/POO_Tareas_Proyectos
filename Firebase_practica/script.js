
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";


console.log("Ejecutando");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaGSfLSmbqWsVzzmrzliCZjCtowujyO7E",
    authDomain: "fir-prueba-26e7e.firebaseapp.com",
    projectId: "fir-prueba-26e7e",
    storageBucket: "fir-prueba-26e7e.appspot.com",
    messagingSenderId: "240706810699",
    appId: "1:240706810699:web:f043aee78705e38f636ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function(e){

    set(ref(db, "user/" + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        account: document.getElementById("account").value
    }
    ); alert("Has iniciado sesión.");
    
})
