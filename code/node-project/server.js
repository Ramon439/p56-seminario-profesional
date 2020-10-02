const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = require('./network/routes')

const router=express.Router()
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
router(app)



app.use('/', express.static('public'))

app.listen(5000)
console.log('La aplicacion esta escuchando en http://localhost:5000')