var express = require('express');
var router = express.Router();

/* GET home suscripcion. */
router.get('/', function(req, res, next) {
  
  res.render('suscripcion', { 
              title: 'Bienvenidos Suscripcion',
              descripcion: 'hola soy la descipcion',
              actividades:[
                {id:"1", nombre:"Allan", correo: "maximoajp@gmail.com", prioridad:"3", Actividad:"Ir a estudiar"},
                {id:"1", nombre:"Carlos", correo: "hola@gmail.com", prioridad:"2", Actividad:"Ir a una cita"}
              ] 
            });
});

module.exports = router;
