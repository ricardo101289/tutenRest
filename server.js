var express = require('express')
const bodyParser = require('body-parser');
var moment = require('moment-timezone');
var http = require('http')
var app = express()
moment.tz.setDefault("America/Guayaquil");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

var users = ['oscar', 'juan', 'marcos']
app.get('/users', (req, res) => {
  res.send(users)
})
 
app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
})

app.post('/timezone', function (req, res) {
  if(!req.body.hora || !req.body.timezone) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo hora y timezone son requeridos'
   };
  }else {
    let hour = {
     "time": moment(moment().format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm'),
     "timezone": "utc"
    };
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'ok',
     respuesta: hour
    };
   
  }
  res.send(respuesta);
 });
 
http.createServer(app).listen(process.env.PORT || 8002, () => {
  console.log('Server started at http://localhost:8002');
});