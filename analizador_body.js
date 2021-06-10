
//para usar la libreria que se instalo, con npm install express
const express = require('express');

//importar libreria body-parser
const bodyParser = require('body-parser');

// para especificar rutas, y que respuestas enviara
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
//Funcion que responde a las peticiiones que vengan a esta ruta
app.get('/saludo', function(req, res){
    //usamos response para enviar un msg como respuesta de la peticion
    res.send(`Hola, ${req.query.name}`);
});

//Body parser analizador ruta
app.post('/', function(req, res){
    //viene en el objeto body
    res.send(`Hola, ${req.body.name}`);
});

app.listen(3000);