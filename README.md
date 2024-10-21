# Tripleten web_project_around_express

# Proyecto realizado en el bootcamp de desarrollo web de Tripleten. Utiliza HTML, CSS, JS y React. El proyecto fue realizado en VSS (Visual Studio Code).

## ¿De qué se trata?

## Esta es una API básica construida con Express que permite gestionar usuarios y tarjetas. La API ofrece varias rutas para interactuar con los datos de usuarios almacenados en un archivo JSON.

### La aplicación escuchará en el puerto especificado (por defecto, 3000).

### Rutas


#### Users

#### Obtener todos los usuarios. Método: GET, ruta: /users 
#### Obtener usuario en específico. Método: GET, ruta: /users/id
#### Nuevo usuario. Método: POST, ruta: /users, body:
#### { 
####  "name": "nombre del nuevo usuario", 
####  "about":"acerca del nuevo usuario",
####  "avatar": "avatar del nuevo usuario", 
####  "_id": "id del nuevo usuario" 
#### }


#### Cards

#### Obtener todos las tarjetas. Método: GET, ruta: /cards 


#### All

#### Se creo una ruta más que cubre las otras rutas no existentes enviando mensaje: 'Not found'

#### Middleware

#### Se utiliza un middleware llamado doesUserExist para verificar la existencia de un usuario antes de permitir el acceso a la información de un usuario específico.

# © Luis Gonzalez

