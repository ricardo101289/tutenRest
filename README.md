## tutenRest

Desarrollo de un servicio REST, que pueda ser consumido por un WebApp. Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC de 2 parámetros enviados al servicio: hora y timezone (por ejemplo: dato1=18:31:45, dato2=-3), deberán devolver la hora calculada, en un archivo json con el siguiente formato: { "response": { "time": "18:43:00", "timezone": "utc" } }

## Stack
Node.js v10.16.0
Moment.js v 2.24.0
Heroku

## Instalación

Run `npm install`

## Development server

Run `node server.js`

## Servicio publicado en heroku
https://tuten-rest.herokuapp.com/
https://tuten-rest.herokuapp.com/timezone

