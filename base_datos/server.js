
const sqlite3 = require('sqlite3').verbose();
//para usar la libreria que se instalo, con npm install express
const express = require('express');
//importar libreria body-parser
const bodyParser = require('body-parser');
//adding sequelize
const Sequelize = require('sequelize');

// para especificar rutas, y que respuestas enviara
const app = express();
//insertar en el middleware
app.use(bodyParser.urlencoded({extended: true}));

//let db = new sqlite3.Database('proyecto-backend');
const sequelize = new Sequelize('proyecto-backend', null, null,{
    dialect: 'sqlite',
    //referencia al file
    storage: '.proyecto-backend'
});

//Correr una consulta

app.post('/pendientes', function(req, res){
    //enviar lista despuest de setear un motor
    //db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');
    db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send('Insercion finalizada');
});



app.listen(3000);

//colocar un listener a un evento del proceso, puede recibir msg del exterior, como cuando hiteamos teclas
// process.on('SIGNIT', function(){
//     console.log('Adios - Atte. El servidor');
//     //Cierre de conexion para evitar fugas de memoria en la computadora.
//     db.close();
//     process.exit();
// })