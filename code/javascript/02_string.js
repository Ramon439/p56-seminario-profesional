  
var nombre = 'Ramon'
var apellido = 'Pilla'

var nombre_ = 'Ramon', apellido_ = 'Pilla'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMayusculas = apellido.toUpperCase()

// Javascript Puro
console.log( nombreMayusculas + ' ' + apellidoMayusculas )
// Especificación de Javascript - EcmaScript +6 
console.log( `${nombre} ${apellidoMayusculas}` )

var primeraLetraNombre = nombre.charAt(0)
var longitudNombre = nombre.length
var subcadenaNombre = nombre.substr(1, 3)

console.log( primeraLetraNombre )
console.log( longitudNombre )
console.log( subcadenaNombre )