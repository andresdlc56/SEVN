//RUTAS Administrador del sistema

var indexController = require('../../controllers/indexController.js');

module.exports = function(app) {
    /*Index*/
    app.get('/', indexController.index);
}