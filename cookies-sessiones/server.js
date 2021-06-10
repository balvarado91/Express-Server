const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

app.use(cookieSession({
    name: 'session',
    //arreglo con claves para firmar y verificar cokkies
    keys: ['asrgsdhkjlksfn23knklsd', 'asdasd93klksmjjaaslkd']
}));

//cuente las veces que el usuario ha ingresado
app.get('/',function(req,res){
    //Psts ls ptimrts vez que el iser ingresa a la pagin req.session.visits is NaN guarda 0 en la variable
    req.session.visits = req.session.visits || 0;
    //sumando uno a las visitas de la pagina
    req.session.visits = req.session.visits + 1;
    res.send(`${req.session.visits} visita(s)`);
});
app.listen(3000);