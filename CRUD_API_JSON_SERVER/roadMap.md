# PLANTEAMIENTO PARA RESOLVER CUALQUIER EJERCICIO


#### Enunciado:
> Crear una función que permita añadir un nuevo producto a la base de datos, 
> utilizando la solicitud POST e incluyendo una nueva categoría en caso de que no exista.


## PASO 0:
Imprimir por pantalla o consola un mensaje, para comprobar que está todo el "circuito" conectado.

Si la función debe recibir argumentos, imprimirlos para observar el formato y contenido de los mismos.

Conocer la estructura de datos con la que se va a trabajar. Que datos contiene, que tipos y estructura.



## PASO 1:
### **Analizar el problema/enunciado**
  
  Ejemplo de insertar un producto:

- ¿Que necesito para insertar un producto?

```json
    {
      "id": "Clave primaria, IMPORTANTE",
      "nombre": "Campo no indispensable",
      "precio": "Campo no indispensable",
      "imagen": "Campo no indispensable",
      "categoria": "Clave foránea, IMPORTANTE"
    }
```

- ¿Qué tengo del producto?

```json
    {
      "nombre": "nombre",
      "precio": "precio",
      "imagen": "url",
      "categoria": "Texto de la categoría, necesito id"
    }
```


- ¿Que es lo que hay que hacer?
  
Analizar los campos susceptibles a errores, para establecer el orden de ejecución:

-> Obtener la categoría (en caso de que no esté creada, se crea).

-> Obtener id del producto

-> Insertar el producto

- ¿Qué retorna la función?


