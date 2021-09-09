const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

//imports
const userrutas = require('./routes/users')

// puerto
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(userrutas);

//corriendo
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;