var express = require('express');
var router = express.Router();

/* GET home sesion. */
router.get('/', function(req, res, next) {
  
  res.render('sesion', { 
              title: 'Bienvenidos a Iniciar sesion',
              descripcion: 'hola soy la descipcion' 
            });
});

module.exports = router;
