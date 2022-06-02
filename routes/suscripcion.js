var express = require('express');
var router = express.Router();

/* GET home suscripcion. */
router.get('/', function(req, res, next) {
  
  res.render('suscripcion', { 
              title: 'Bienvenidos Suscripcion',
              descripcion: 'hola soy la descipcion',
              actividades:[
                {id: '1', nombre: 'Allan', correo: 'maximoajp@gmail.com', prioridad: '1', act: 'Ir a estudiar', estado: '1'},
                {id: '2', nombre: 'Carlos', correo: 'hola@gmail.com', prioridad: '2', act: 'Ir a una cita', estado: '2' }
              ] 
            });
});

module.exports = router;
