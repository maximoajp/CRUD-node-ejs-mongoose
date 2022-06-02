var express = require('express');
var router = express.Router();

/* GET home suscripcion. */
router.get('/', function(req, res, next) {
  
  res.render('suscripcion', { 
              title: 'Bienvenidos Suscripcion',
              descripcion: 'hola soy la descipcion' 
            });
});

module.exports = router;
