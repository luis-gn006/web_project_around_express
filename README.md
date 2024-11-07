# Tripleten Web Project Around Express

Este es un proyecto de API básica realizado en el bootcamp de desarrollo web de Tripleten, que utiliza **Express.js** y **MongoDB** para gestionar usuarios y tarjetas. La aplicación permite realizar operaciones CRUD sobre ambos recursos (usuarios y tarjetas) y está diseñada para ser utilizada como base para aplicaciones web.

## Tecnologías Usadas

- **Backend:** Express.js
- **Base de Datos:** MongoDB
- **Middleware personalizado:** Verificación de existencia de usuario y tarjeta.
- **Controladores:** Se utilizan para manejar la lógica de las rutas de usuarios y tarjetas.

La aplicación escuchará en el puerto especificado (por defecto, 3000).

---

## Rutas

### Rutas de Usuarios

- **Obtener todos los usuarios:**
  - **Método:** GET
  - **Ruta:** `/users`
  - **Descripción:** Devuelve todos los usuarios registrados.

- **Obtener un usuario específico:**
  - **Método:** GET
  - **Ruta:** `/users/:id`
  - **Descripción:** Devuelve la información de un usuario por su id. La existencia del usuario será verificada por el middleware `doesUserExist`.

- **Crear un nuevo usuario:**
  - **Método:** POST
  - **Ruta:** `/users`
  - **Body:** JSON
    ```json
    {
      "name": "nombre del nuevo usuario",
      "about": "acerca del nuevo usuario",
      "avatar": "url del avatar"  // "avatar" es verificado para que sea una URL válida mediante Regex. Si no es válida, se arrojará un error de validación 400.
    }
    ```
  - **Descripción:** Crea un nuevo usuario. El `id` no es necesario, ya que MongoDB lo genera automáticamente.

- **Actualizar información de un usuario:**
  - **Método:** PATCH
  - **Ruta:** `/users/me`
  - **Descripción:** Actualiza la información del usuario autenticado (es decir, el usuario especificado en el middleware).

- **Actualizar avatar de un usuario:**
  - **Método:** PATCH
  - **Ruta:** `/users/me/avatar`
  - **Descripción:** Actualiza el avatar del usuario autenticado.

---

### Rutas de Tarjetas

- **Obtener todas las tarjetas:**
  - **Método:** GET
  - **Ruta:** `/cards`
  - **Descripción:** Devuelve todas las tarjetas almacenadas.

- **Crear una nueva tarjeta:**
  - **Método:** POST
  - **Ruta:** `/cards`
  - **Body:** JSON
    ```json
    {
      "name": "nombre de la tarjeta",
      "link": "enlace de la tarjeta"  // El "link" es verificado para ser una URL válida, igual que el "avatar".
    }
    ```
  - **Descripción:** Crea una nueva tarjeta.

- **Eliminar una tarjeta:**
  - **Método:** DELETE
  - **Ruta:** `/cards/:cardId`
  - **Descripción:** Elimina una tarjeta específica por su `cardId`. La existencia de la tarjeta será verificada por el middleware `doesCardExist`.

- **Dar like a una tarjeta:**
  - **Método:** PUT
  - **Ruta:** `/cards/:cardId/likes`
  - **Descripción:** Agrega un "like" a una tarjeta específica.

- **Quitar like a una tarjeta:**
  - **Método:** DELETE
  - **Ruta:** `/cards/:cardId/likes`
  - **Descripción:** Quita un "like" de una tarjeta específica.

---

### Ruta de "Not Found"

- **Manejo de errores de rutas no existentes:**
  - **Método:** ANY
  - **Ruta:** Cualquiera que no esté especificada anteriormente.
  - **Descripción:** En caso de que no se encuentre la ruta solicitada, devuelve un error 500 con un mensaje personalizado.

---

## Middleware

- **doesUserExist:** Middleware utilizado para verificar la existencia de un usuario antes de realizar operaciones que involucren obtener o modificar información del usuario.

- **doesCardExist:** Middleware utilizado para verificar la existencia de una tarjeta antes de realizar operaciones como eliminar o modificar el "like" de una tarjeta.

---

© Luis González
