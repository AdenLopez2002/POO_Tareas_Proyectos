const inputField = document.getElementById("field")
const addButton = document.getElementById("add")

addButton.addEventListener("click", function() {
    let inputValue = inputField.value

    console.log("Hasta ahora funcionando..")
    console.log(inputValue)
})





addButton.addEventListener("click", function guardarProductoComprado(producto) {
    // Supongamos que 'productosComprados' es la colección donde guardaremos los productos
    firebase.firestore().collection('productosComprados').add(producto);
  });
