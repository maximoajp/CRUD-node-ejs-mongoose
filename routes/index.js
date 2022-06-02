var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { 
              title: 'Bienvenidos a mi web amigos',
              descripcion: 'hola soy la descipcion' 
            });
});

module.exports = router;
