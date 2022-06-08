# Proyecto Gimnas

Python a Nodejs

----

Convertir las tareas de DAW/DWES con uso de python a NodeJS.

Intentando usar el modelo MVC (hasta el momento no tengo ningun model generado).

Se ha implementado una API Rest con los siguientes metodos para las distintas rutas.

|Ruta|Método | Descripción |
|---|:---:|---|
|/api/clients|GET|Obtenemos los datos de todos los clientes|
|/api/clients/:id|GET|Obtenemos los datos de un cliente|
|/api/pistas|GET|Obtenemos los datos de todas las pistas|
|/api/pistas/:id|GET|Obtenemos los datos de una pista|
|/api/reservas|GET|Obtenemos los datos de todas las reservas realizadas|
|/api/reservas/:id|GET|Obtenemos los datos de una reserva a partir del idclient|

Aun pendiente de añadir nuevos métodos:

GET - /api/reservas/semana/:fecha
GET - /api/reservas/client/:id
POST - /api/reservas/client/:id
DELETE - /api/reservas/client/:id

La BD está implementada sobre MariaDB.