//trabajando con sequelize
const Task = require('../models').Task;

//exportar modulo, common js
module.exports = {
//claves que corresponden al nombre con las que se identificaran las funciones, manejadores http
    home: function(req, res){
        Task.findAll().then(function(tasks){
            res.render('tasks/index',{tasks: tasks});
        });
    }
};