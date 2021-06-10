
//para usar la libreria que se instalo, con npm install express
const express = require('express');

// para especificar rutas, y que respuestas enviara
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets', {
    etag: false,
    maxAge: '5h'
}));
app.get('/', function(req, res){
//enviar lista despuest de setear un motor
    res.render('index');
});


app.listen(3000);