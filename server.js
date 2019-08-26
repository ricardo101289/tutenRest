var express = require('express')
const bodyParser = require('body-parser');
var moment = require('moment-timezone');
var http = require('http')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
var users = ['oscar', 'juan', 'marcos']

app.get('/users', (req, res) => {
  res.send(users)
})
 
app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
})

app.post('/timezone', function (req, res) {
  console.log('====================================');
  console.log(req.body);
  console.log(moment(moment().format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'))
  console.log('====================================');
  if(!req.body.hora || !req.body.timezone) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo hora y timezone son requeridos'
   };
  }else {
    let hour = {
     "time": moment(moment().format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'),
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
 
http.createServer(app).listen(8002, () => {
  console.log('Server started at http://localhost:8002');
});