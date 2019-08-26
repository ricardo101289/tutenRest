var express = require('express')
const bodyParser = require('body-parser');
var moment = require('moment-timezone');
var http = require('http')
var app = express()

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
  console.log('====================================');
  console.log(req.body);
  // console.log(moment(moment().format('YYYY-MM-DD')).utcOffset('-0500').format('YYYY-MM-DD'))
  console.log('====================================');
  console.log(moment().format('YYYY-MM-DD HH:mm'));
  console.log(moment().utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm'));
  console.log('====================================');
  console.log('====================================');
  let fecha = moment().format('YYYY-MM-DD HH:mm')
  console.log(fecha);
  console.log(moment(moment(fecha)).utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm'));
  console.log('====================================');
  let date = moment().utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm');
  console.log("formato de salida: ", moment(moment(date).format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'))
  console.log('====================================');
  // console.log("locale ", moment().add(1, 'days').format('YYYY-MM-DD'))
  console.log("locale ", moment().utcOffset('-0500').format('YYYY-MM-DD'))
  console.log("date ", date);
  console.log(moment(moment(fecha).format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm'))
  console.log(moment(moment(fecha).format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'))
  console.log(moment(moment().utcOffset(req.body.timezone).format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm'))
  console.log(moment(moment(fecha).format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'));
  console.log(moment(fecha+"T"+req.body.hora).utcOffset(req.body.timezone).format('YYYY-MM-DD HH:mm'));
  console.log(moment(fecha+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'));
  console.log('====================================');
    // moment(moment(moment().format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm')).utcOffset(req.body.timezone).format('HH:mm')
  // console.log(moment(moment().format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'))
  console.log('====================================');
  if(!req.body.hora || !req.body.timezone) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo hora y timezone son requeridos'
   };
  }else {
    let hour = {
     "time": moment(moment(date).format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm'),
     "timezone": "utc"
    };
    // moment(moment().format('YYYY-MM-DD')+"T"+req.body.hora).utcOffset(req.body.timezone).format('HH:mm')
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