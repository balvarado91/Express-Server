
//para usar la libreria que se instalo, con npm install express
const express = require('express');

// para especificar rutas, y que respuestas enviara
const app = express();

//Funcion que responde a las peticiiones que vengan a esta ruta
app.get('/saludo', function(req, res){
    //usamos response para enviar un msg como respuesta de la peticion
    res.send(`Hola, ${req.query.name}`);
});

app.get('/saludo', function(req, res){
    //usamos response para enviar un msg como respuesta de la peticion
    res.send(`Hola, ${req.query.name}`);
});

app.listen(3000);