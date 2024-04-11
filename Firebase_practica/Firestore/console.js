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


  /*//gasto
                var sum;
                lista_carrito.forEach((item)=> {
                    var subsum = (item.cantidad.value)*(item.precio.value)
                    console.log(subsum)
                    sum += subsum.value
                });
                const sumaContainer = document.getElementById("Resultado")
                sumaContainer.innerHTML = sum.value;
                console.log(sum.value)*/ 