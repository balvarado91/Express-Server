const http = require('http');


//Se ejejcuta cada vez que el servidor reciba una funcion
function reponderPeticion(request,response){
    //cerramos la conexion con .end
    response.end('Hola Mundo');
}
let server = http.createServer(reponderPeticion);

//recibe el puesto donde escuchará, evitar el puerto 80 para no entrar en conflictos
server.listen(3000);