//Primero configuramos el método para crear la cookie y obtenerla luego
//set cookie

function setCookie(cookieName, cookieValue, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}

function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

const btnDeacuerdo = document.getElementById("ok")
const avisoCookies = document.getElementById("tarjetita")
const fondoAvisoCookies = document.getElementById("fondo_aviso_cookies")

//Aceptar cookies botón
btnDeacuerdo.addEventListener("click", () =>{
    avisoCookies.classList.remove("activa");
    fondoAvisoCookies.classList.remove("activo")

    
    setCookie("userLocation", "Comayagua, Honduras", 7);
    const ubicacion = getCookie("userLocation");
    //imprimir cookie en consola
    console.log("Ubicación del usuario:", ubicacion);
})


