const express = require("express");
const app = express();

app.get('/', function (req, res){
    res.send('saludos amigos');
})

app.listen(3000, () => {
   console.log("el servidor esta inicializadoen el puerto 3000") ;
});

