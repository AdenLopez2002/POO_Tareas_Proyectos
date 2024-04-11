
        // Initialize Firebase mi version
        const app = initializeApp(firebaseConfig);

        var db = getFirestore(app);
        var carritoCollection = collection(db, 'carrito')

        carritoCollection.get().then((querySnapshot)=>{
            querySnapshot.array.forEach((doc) => {
                const cantidad = doc.data().cantidad
                const nombre = doc.data().nombre
                const precio = doc.data().precio
                console.log(cantidad, nombre, precio);
                add(cantidad, nombre, precio);

                
            });
        }).catch((error)=> {
            console.log("Error al traer los elementos del carrito.", error);
        });

