# Manual de promesas en JavaScript

### Estados de las promesas

> - Pendiente **(Pending)**: Es el estado inicial de una promesa que está en progreso.
> - Cumplida **(Fulfilled)**: La promesa se ha realizado correctamente. Devuelve un valor.
> - Rechazada **(Rejected)**: La promesa no se resuelve y se devuelve un error.

### Creación de promesas

```javascript
    const miPromesa = new Promise((resolve, reject) => {
        // Aquí el código que es asíncrono.
        if("Condicion es OK"){
            resolve ("Lo que quiero devolver"); // <-- Resolve se puede entender que simula la acción de return
        } else {
            reject (new Error ("el error"));
        }
    });
```

### Uso o consumo de las Promesas

```javascript
    miPromesa
        .then((data) => {
            console.log("La promesa ha sido resuelta: ", data)
        })
        .catch((error) => {
            console.log("Error, promesa rechazada: " error) // --> Imprime "el error"
        }) 
```

