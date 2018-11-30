const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 8081);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); //Para entender los formatos json

//models
var models = require('./models');

//Rutas
var index = require('./routes/index/index.js')(app);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Bien! DB Conectada')
}).catch(function(err) {
    console.log(err, "Algo Fallo")
});

//Servidor Escuchando 
app.listen(app.get('port'), () => {
	console.log('Servidor Escuchando en el Puerto', app.get('port'));
});