const express = require('express')
const bodyParser = require('body-parser')
const response =require('./network/response')


const router = require('/network/routes')
var app = express()
app.use(bodyParser.json())
app.use( bodyParser.urlencoded( {extended:false} ) )
router(app)
router.get('/carrera', function(req, res){
    response.success(req, res, 'Lista de carreras de la Universidad Politecnica Salesiana-Sede Guayaquil',200 )

})

router.post('/carrera', function(req, res){
if(req.query.error == 'ok'){
 response.error(req, res, 'Error al ingresar la carrera',500 )
}else{
 response.success(req, res, 'Ingreso de carrera exitoso',201)

}
})
app.use( '/', express.static('public'))


app.listen( 5000 )
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )